// imports
import './index.css';
import * as App from './App';

// wait for load
window.addEventListener('load', async () => {
  // render application
  App.render(App.root, App.state);
  // add toggle button handler to window object
  window.toggleButtonHandler = App.toggleButtonHandler;
});
