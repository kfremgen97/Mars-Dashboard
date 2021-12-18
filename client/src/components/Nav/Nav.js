// imports
import './Nav.css';

// nav item component
const NavItem = function (roverName) {
  return `
  <li class="nav__item">
    <a class="nav__link" href="#${roverName} data-name="${roverName}">
    ${roverName} 
    </a>
  </li>
  `;
};

// nav component
const Nav = function (roverNames, axis) {
  return `
  <nav class="nav ${axis === 'vertical' ? 'nav--vertical' : 'nav--horizontal'}">
    <ul class="nav__list ${axis === 'vertical' ? 'nav__list--vertical' : 'nav__list--horizontal'}">
      ${NavItem('Home')}
      ${roverNames.map((roverName) => NavItem(roverName)).join('')}
    </ul>
  </nav>
  `;
};

// exports
export default Nav;
