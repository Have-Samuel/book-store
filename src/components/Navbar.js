import { NavLink } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import '../styles/Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/status',
      text: 'Check Status',
    },
  ];

  return (
    <nav className="navBar">
      <div className="leftLinks">
        <span className="logo">Bookstore CMS</span>
        <ul className="navLinks">
          <li
            key={links[0].id}
          >
            <NavLink
              className={(navData) => {
                if (navData.isActive) {
                  return 'a-link';
                }
                return '';
              }}
              to={links[0].path}
            >
              {links[0].text}
            </NavLink>
          </li>
          <li key={links[1].id}>
            <NavLink
              className={(navData) => {
                if (navData.isActive) {
                  return 'a-link';
                }
                return '';
              }}
              to={links[1].path}
            >
              {links[1].text}
            </NavLink>
          </li>
        </ul>
      </div>
      <BsPersonFill className="profileIcon" />
    </nav>
  );
};
export default Navbar;
