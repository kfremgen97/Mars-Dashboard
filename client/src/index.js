// imports
import './index.css';
import App from './App';

// wait for load
window.addEventListener('load', async () => {
  // render application
  App.render(App.root, App.getState());
});
