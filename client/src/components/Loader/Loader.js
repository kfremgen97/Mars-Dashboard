// imports
import './Loader.css';

const Loader = function () {
  return `
    <div class="loader">
    <svg class="loader__icon">
      <use href="./assets/regular.svg#spinner">
    </svg> 
    </div>
  `;
};

// exports
export default Loader;
