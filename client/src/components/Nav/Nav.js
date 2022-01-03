// imports
import './Nav.css';

// nav item component
const NavItem = function (name, selectedName) {
  return `
  <li class="nav__item ${name.toLowerCase() === selectedName.toLowerCase() ? 'nav__item--active' : ''}" data-name="${name}">
    <a class="nav__link" href="#${name}">
    ${name.toUpperCase()} 
    </a>
  </li>
  `;
};

// nav component
const Nav = function (names, selectedName, axis) {
  return `
  <nav class="nav ${axis === 'vertical' ? 'nav--vertical' : 'nav--horizontal'}" onclick="navHandler(event)">
    <ul class="nav__list ${axis === 'vertical' ? 'nav__list--vertical' : 'nav__list--horizontal'}">
      ${names.map((name) => NavItem(name, selectedName)).join('')}
    </ul>
  </nav>
  `;
};

// exports
export default Nav;
