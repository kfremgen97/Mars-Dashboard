// imports
import './Sidebar.css';
import Nav from '../Nav/Nav';

// sidebar component
const Sidebar = function (roverNames, sidebarOpen) {
  return `
  <aside class="sidebar ${sidebarOpen ? 'sidebar--open' : ''}">
    ${Nav(roverNames, 'vertical')}
  </aside>
  `;
};

// exports
export default Sidebar;
