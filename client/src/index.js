// imports
import './index.css';
import App from './App';

// wait for load
window.addEventListener('load', async () => {
  // render application
  App.render(App.root, App.getState());
  // add toggle button handler to window object
  window.toggleButtonHandler = App.toggleButtonHandler;
  // add backdrop handler to window object
  window.backdropHandler = App.backdropHandler;
  // add nav handler to window object
  window.navHandler = App.navHandler;

  try {
    App.updateSate(App.getState(), { isLoading: true });
    // get the day data
    const day = await App.getDayData();
    App.updateSate(App.getState(), { day, isLoading: false });
  } catch (error) {
    // update the state
    const completeState = { isLoading: false };
    App.updateSate(App.getState(), completeState);
  }
});
