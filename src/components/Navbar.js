import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions', id: 'border' },
  { path: 'profile', text: 'Profile' },
];

const Navbar = () => (
  <>
    <nav className="navbar">
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : 'normal')}
              id={link.id}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <hr />
  </>
);
export default Navbar;
