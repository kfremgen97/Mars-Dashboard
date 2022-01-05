// imports
import './Header.css';
import ToggleButton from '../ToggleButton/ToggleButton';
import Nav from '../Nav/Nav';

// header component
const Header = function (names, selectedName) {
  return `
    <header class="header">
    ${ToggleButton()}
    <h1 class="heading heading--1 ml">Mars Dashboard </h1>
    ${Nav(names, selectedName, 'horizontal')}
    </header>
  `;
};

// Exports
export default Header;
