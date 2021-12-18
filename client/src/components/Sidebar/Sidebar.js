// imports
import './Sidebar.css';
import Nav from '../Nav/Nav';

// sidebar component
const Sidebar = function (names, sidebarOpen) {
  return `
  <aside class="sidebar ${sidebarOpen ? 'sidebar--open' : ''}">
    ${Nav(names, 'vertical')}
  </aside>
  `;
};

// exports
export default Sidebar;
