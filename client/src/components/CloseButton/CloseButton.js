// imports
import './CloseButton.css';

const CloseButton = function () {
  return `
    <button class="close-button" onclick="backdropHandler(event)">
    <svg class="close-button__icon">
    <use href="./assets/regular.svg#times"></use>
    </svg>
    </button>
  `;
};

// exports
export default CloseButton;
