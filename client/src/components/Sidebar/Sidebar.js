// imports
import './Sidebar.css';
import Nav from '../Nav/Nav';

// sidebar component
const Sidebar = function (names, selectedName, sidebarOpen) {
  return `
  <aside class="sidebar ${sidebarOpen ? 'sidebar--open' : ''}">
    ${Nav(names, selectedName, 'vertical')}
  </aside>
  `;
};

// exports
export default Sidebar;
