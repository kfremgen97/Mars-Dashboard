// imports
import './App.css';

// app component
class App {
  // hold the app state
  #state = {};

  // app root
  root = document.querySelector('#root');

  // get the state
  getState() {
    return this.#state;
  }

  // update the state
  updateSate(oldState, newState) {
    // merge the new state into the old state
    this.#state = Object.assign(oldState, newState);
    // render the application
    this.render(this.root, this.#state);
  }

  // generate the application
  generate(state) {
    return `
    <h1> Test </h1>
    `;
  }

  // render the application
  render(root, state) {
    // set the rooter element to the generated markup
    // eslint-disable-next-line no-param-reassign
    root.innerHTML = this.generate(state);
  }
}

// export
export default new App();
