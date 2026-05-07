// Styles
import './Menu.scss';

// Components
import { Navigation } from '../Navigation';

export const Menu = ({
  menuRef,
  closeMenu,
  className,
}) => (
  <aside ref={menuRef} className={`${className} Menu`}>
    <Navigation inMenu={true} closeMenu={closeMenu} />
  </aside>
);
