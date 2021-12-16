// imports
import './ToggleButton.css';

// toggle button component
const ToggleButton = function () {
  return `
    <button class="toggle-button">
      <svg class="toggle-button__icon">
        <use href="./assets/regular.svg#bars"></use>
      </svg>
    </button>
  `;
};

// exports
export default ToggleButton;
