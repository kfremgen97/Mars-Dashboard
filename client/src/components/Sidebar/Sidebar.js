// imports
import './Sidebar.css';
import Nav from '../Nav/Nav';

// sidebar component
const Sidebar = function (roverNames) {
  return `
  <aside class="sidebar">
    ${Nav(roverNames, 'vertical')}
  </aside>
  `;
};

// exports
export default Sidebar;
