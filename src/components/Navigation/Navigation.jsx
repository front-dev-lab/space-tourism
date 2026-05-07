import { NavLink } from 'react-router-dom';

// Styles
import './Navigation.scss';

export const Navigation = ({ inMenu, closeMenu }) => {
  const links = ['home', 'destinations', 'crew', 'technology'];
  const listClassName = inMenu ? 'Navigation__List Navigation__List--Menu' : 'Navigation__List';
  const linkClassName = inMenu ? 'Navigation__Link Navigation__Link--Menu' :
  'Navigation__Link';

  const clickHandler = inMenu ? closeMenu : () => {};

  return (
    <nav className="Navigation">
      <ul className={listClassName}>
        {links.map((link, i) => (
          <li key={link + i}>
            <NavLink
              onClick={clickHandler}
              to={link === links[0] ? '/' : `${link}`}
              className={({ isActive }) => (
                isActive ? `${linkClassName} Navigation__Link--Active` : linkClassName
              )}
            >
              <span className="Navigation__Number">
                {`0${i}`}
              </span>

              {link.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
