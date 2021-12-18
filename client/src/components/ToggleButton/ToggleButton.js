// imports
import './ToggleButton.css';

// toggle button component
const ToggleButton = function (toggleButtonHandler) {
  return `
    <button class="toggle-button" onclick="toggleButtonHandler(event)">
      <svg class="toggle-button__icon">
        <use href="./assets/regular.svg#bars"></use>
      </svg>
    </button>
  `;
};

// exports
export default ToggleButton;
