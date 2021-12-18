// imports
import './App.css';
import Backdrop from './components/Backdrop/Backdrop';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

// hold the app state
// eslint-disable-next-line import/no-mutable-exports
export let state = {
  sidebarOpen: false,
  roverNames: ['Curiosity', 'Opportunity', 'Spirit'],
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

// generate the application
const generate = function (currentState) {
  return `
      ${currentState.sidebarOpen ? Backdrop() : ''}
      ${Sidebar(currentState.roverNames, currentState.sidebarOpen)}
      ${Header()}
    `;
};

// render the application
export const render = function (rootEl, currentState) {
  // set the rooter element to the generated markup
  // eslint-disable-next-line no-param-reassign
  rootEl.innerHTML = generate(currentState);
};
