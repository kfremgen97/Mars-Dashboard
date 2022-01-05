// imports
import './App.css';
import getDayInfo from './services/dayService';
import { getRoverInfo, getRoverPhotos } from './services/roverService';
import Backdrop from './components/Backdrop/Backdrop';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Day from './components/Day/Day';
import Rover from './components/Rover/Rover';

class App {
  // app state
  #state = {
    sidebarOpen: false,
    names: ['Home', 'Curiosity', 'Opportunity', 'Spirit'],
    selectedName: 'Home',
    rover: {},
    day: {},
    error: {
      showError: false,
      dayMessage: '',
      roverMessage: '',
    },
    isLoading: false,
  };

  // app root
  root = document.querySelector('#root');

  // get the state
  getState = function () {
    return this.#state;
  };

  // update the state
  updateSate = function (oldState, newState) {
    // merge the new state into the old state
    this.#state = Object.assign(oldState, newState);
    // render the application
    // eslint-disable-next-line no-use-before-define
    this.render(this.root, this.#state);
  };

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
  getDayData = async function () {
    try {
      // get the day info
      const {
        date, title, explanation, url, media_type: mediaType,
      } = await getDayInfo();

      // return the data
      return {
        date,
        title,
        explanation,
        url,
        mediaType,
      };
    } catch (error) {
      throw new Error('Unable to get day data');
    }
  };

  // get rover data
  // eslint-disable-next-line class-methods-use-this
  getRoverData = async function (roverName) {
    try {
      // get the rover info
      const {
        photo_manifest: {
          name, landing_date: landingDate, launch_date: launchDate, status, max_sol: maxSol,
        },
      } = await getRoverInfo(roverName);

      // get the rover photos
      const { photos } = await getRoverPhotos(name, maxSol);

      // return the rover state
      return {
        name,
        landingDate,
        launchDate,
        status,
        maxSol,
        photos,
      };
    } catch (error) {
      throw new Error('Unable to get rover data');
    }
  };

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

    try {
      if (this.#state.selectedName.toLocaleLowerCase() === 'home') {
        // get the day data
        const day = await this.getDayData();
        // update the state
        this.updateSate(this.#state, { day, isLoading: false });
        return;
      }

      // get the rover data
      const rover = await this.getRoverData(this.#state.selectedName);
      // update the state
      this.updateSate(this.#state, { rover, isLoading: false });
    } catch (error) {
      // set show error
      errorState.showError = true;
      // set the error message
      if (this.#state.selectedName.toLocaleLowerCase() === 'home') errorState.dayMessage = error.message;
      else errorState.roverMessage = error.message;

      // update the state
      this.updateSate(this.#state, { error: errorState, isLoading: false });
    }
  };

  // generate the application
  // eslint-disable-next-line class-methods-use-this
  generate = function (currentState) {
    // get currentState values
    const {
      names, selectedName, rover, day, sidebarOpen, isLoading, error,
    } = currentState;

    return `
      ${sidebarOpen ? Backdrop() : ''}
      ${Sidebar(names, selectedName, sidebarOpen)}
      ${Header()}
      ${selectedName.toLowerCase() === 'home' ? Day(day, error, isLoading) : Rover(rover, error, isLoading)}
    `;
  };

  // render the application
  render = function (rootEl, currentState) {
    // set the rooter element to the generated markup
    // eslint-disable-next-line no-param-reassign
    rootEl.innerHTML = this.generate(currentState);
  };
}

// export
export default new App();
