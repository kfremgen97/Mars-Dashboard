// app component
class App {
  // hold the app state
  #state = {};

  // app root
  root = document.querySelector('body');

  // get the state
  getState() {
    return this.#state;
  }

  // update the state
  updateSate(oldState, newState) {
    // merge the new state into the old state
    this.#state = Object.assign(oldState, newState);
    // render the application
    this.root.innerHTML = this.render();
  }

  // render the application
  render() {
    return `
    <h1> Test </h1>
    `;
  }
}

// export
export default new App();
