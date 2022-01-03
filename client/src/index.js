// imports
import './index.css';
import getDayInfo from './services/dayService';
import * as App from './App';

// wait for load
window.addEventListener('load', async () => {
  // render application
  App.render(App.root, App.state);
  // add toggle button handler to window object
  window.toggleButtonHandler = App.toggleButtonHandler;
  // add backdrop handler to window object
  window.backdropHandler = App.backdropHandler;
  // add nav handler to window object
  window.navHandler = App.navHandler;

  try {
    App.updateSate(App.state, { isLoading: true });
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
      isLoading: false,
    };
    App.updateSate(App.state, dayState);
  } catch (error) {
    console.error(error);
    // update the state
    const completeState = { isLoading: false };
    App.updateSate(App.state, completeState);
  }
});
