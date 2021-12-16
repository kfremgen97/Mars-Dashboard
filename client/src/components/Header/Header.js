// imports
import './Header.css';
import ToggleButton from '../ToggleButton/ToggleButton';

// header component
const Header = function () {
  return `
    <header class="header">
    ${ToggleButton()}
    <h1 class="heading heading--1">Mars Dashboard </h1>
    </header>
  `;
};

// Exports
export default Header;
