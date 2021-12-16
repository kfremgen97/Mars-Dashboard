// imports
import './index.css';
import App from './App';

// wait for load
window.addEventListener('load', async () => {
  // update application state which will cause app render
  App.updateSate(App.getState(), {});
});
