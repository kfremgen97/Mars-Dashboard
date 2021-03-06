// imports
import './App.css';
import Immutable from 'immutable';
import getDayInfo from './services/dayService';
import { getRoverInfo, getRoverPhotos } from './services/roverService';
import Backdrop from './components/Backdrop/Backdrop';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Day from './components/Day/Day';
import Rover from './components/Rover/Rover';

class App {
  // app state
  #state = Immutable.Map({
    sidebarOpen: false,
    names: Immutable.List(['Home', 'Curiosity', 'Opportunity', 'Spirit']),
    selectedName: 'Home',
    rover: Immutable.Map({}),
    day: Immutable.Map({}),
    error: Immutable.Map({
      showError: false,
      dayMessage: '',
      roverMessage: '',
    }),
    isLoading: false,
  });

  // app root
  root = document.querySelector('#root');

  // get the state
  getState() {
    return this.#state;
  }

  // update the state
  updateSate(oldState, newState) {
    // merge the new state into the old state
    this.#state = oldState.merge(newState);
    // render the application
    // eslint-disable-next-line no-use-before-define
    this.render(this.root, this.#state.toJS());
  }

  // toggle button handler
  toggleButtonHandler = (event) => {
    // prevent default actions
    event.preventDefault();
    // update the sidebar state to true
    const sidebarState = { sidebarOpen: true };
    this.updateSate(this.#state, sidebarState);
  };

  // backdrop handler
  backdropHandler = (event) => {
    // prevent default actions
    event.preventDefault();
    // update the sidebar state to false
    const sidebarState = { sidebarOpen: false };
    this.updateSate(this.#state, sidebarState);
  };

  // get day data
  // eslint-disable-next-line class-methods-use-this
  async getDayData() {
    try {
      // get the day info
      const dayData = await getDayInfo();
      // return the data
      return dayData;
    } catch (error) {
      throw new Error('Unable to get day data');
    }
  }

  // get rover data
  // eslint-disable-next-line class-methods-use-this
  async getRoverData(roverName) {
    try {
      // get the rover info
      const {
        name, landingDate, launchDate, status, maxSol,
      } = await getRoverInfo(roverName);

      // get the rover photos
      const { photos } = await getRoverPhotos(name, maxSol);

      // return the rover data
      return {
        name,
        landingDate,
        launchDate,
        status,
        maxSol,
        photos,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // nav handler
  navHandler = async (event) => {
    // prevent default actions
    event.preventDefault();

    // update the state for loader and remove show error
    const errorState = { showError: false, dayMessage: '', roverMessage: '' };
    this.updateSate(this.#state, { error: errorState, isLoading: true });

    // make sure  the event target has a parent or itself is a nav item
    const navItem = event.target.closest('.nav__item');
    if (!navItem) return;
    // get the name attribute for selected name
    const nameState = { selectedName: navItem.dataset.name };
    this.updateSate(this.#state, nameState);

    const { selectedName } = this.#state.toJS();
  
    try {
      if (selectedName.toLowerCase() === 'home') {
        // get the day data
        const day = await this.getDayData();
        // update the state
        this.updateSate(this.#state, { day, isLoading: false });
        return;
      }

      // get the rover data
      const rover = await this.getRoverData(selectedName);
      // update the state
      this.updateSate(this.#state, { rover, isLoading: false });
    } catch (error) {
      // set show error
      errorState.showError = true;
      // set the error message
      if (selectedName.toLowerCase() === 'home') errorState.dayMessage = error.message;
      else errorState.roverMessage = error.message;

      // update the state
      this.updateSate(this.#state, { error: errorState, isLoading: false });
    }
  };

  // generate the application
  // eslint-disable-next-line class-methods-use-this
  generate(currentState) {
    // get currentState values
    const {
      names, selectedName, rover, day, sidebarOpen, isLoading, error,
    } = currentState;

    return `
      ${sidebarOpen ? Backdrop() : ''}
      ${Sidebar(names, selectedName, sidebarOpen)}
      ${Header(names, selectedName)}
      ${selectedName.toLowerCase() === 'home' ? Day(day, error, isLoading) : Rover(rover, error, isLoading)}
    `;
  }

  // render the application
  render(rootEl, currentState) {
    // set the rooter element to the generated markup
    // eslint-disable-next-line no-param-reassign
    rootEl.innerHTML = this.generate(currentState);
  }
}

// export
export default new App();
