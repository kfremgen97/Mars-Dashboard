// imports
import './Sidebar.css';
import CloseButton from '../CloseButton/CloseButton';
import Nav from '../Nav/Nav';

// sidebar component
const Sidebar = function (names, selectedName, sidebarOpen) {
  return `
  <aside class="sidebar ${sidebarOpen ? 'sidebar--open' : ''}">
    ${CloseButton()}
    ${Nav(names, selectedName, 'vertical')}
  </aside>
  `;
};

// exports
export default Sidebar;
