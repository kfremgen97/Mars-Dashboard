// imports
import './App.css';
import getDayInfo from './services/dayService';
import Backdrop from './components/Backdrop/Backdrop';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Day from './components/Day/Day';

// hold the app state
// eslint-disable-next-line import/no-mutable-exports
export let state = {
  sidebarOpen: false,
  names: ['Home', 'Curiosity', 'Opportunity', 'Spirit'],
  selectedName: 'Home',
  rover: {},
  day: {},
};

// app root
export const root = document.querySelector('#root');

// update the state
const updateSate = function (oldState, newState) {
  // merge the new state into the old state
  state = Object.assign(oldState, newState);
  // render the application
  // eslint-disable-next-line no-use-before-define
  render(root, state);
};

// toggle button handler
export const toggleButtonHandler = function (event) {
  // prevent default actions
  event.preventDefault();
  // update the sidebar state to true
  const sidebarState = { sidebarOpen: true };
  updateSate(state, sidebarState);
};

export const backdropHandler = function (event) {
  // prevent default actions
  event.preventDefault();
  // update the sidebar state to false
  const sidebarState = { sidebarOpen: false };
  updateSate(state, sidebarState);
};

export const navHandler = async function (event) {
  // prevent default actions
  event.preventDefault();
  // make sure  the event target has a parent or itself is a nav item
  const navItem = event.target.closest('.nav__item');
  if (!navItem) return;
  // get the nav link of the target
  let navLink;
  if (event.target.classList.contains('nav__link')) navLink = event.target;
  else navLink = event.target.querySelector('.nav__link');
  // update the state with the selected name
  const nameState = { selectedName: navLink.dataset.name };
  updateSate(state, nameState);

  try {
    // get the day info
    const {
      date, title, explanation, url, media_type: mediaType,
    } = await getDayInfo();
    // update the day state
    const dayState = {
      day: {
        date,
        title,
        explanation,
        url,
        mediaType,
      },
    };
    updateSate(state, dayState);
  } catch (error) {
    console.error(error);
  }
};

// generate the application
const generate = function (currentState) {
  return `
      ${currentState.sidebarOpen ? Backdrop() : ''}
      ${Sidebar(currentState.names, currentState.selectedName, currentState.sidebarOpen)}
      ${Header()}
      ${currentState.selectedName.toLowerCase() === 'home' ? Day(currentState.day) : ''};
    `;
};

// render the application
export const render = function (rootEl, currentState) {
  // set the rooter element to the generated markup
  // eslint-disable-next-line no-param-reassign
  rootEl.innerHTML = generate(currentState);
};
