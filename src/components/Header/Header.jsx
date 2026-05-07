// Styles
import './Header.scss';

// Icons

// Components
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { Burger } from '../Burger';

export const Header = ({
  className,
  menuIsOpened,
  toggleMenu,
  burgerRef
}) => (
  <header className={`${className} Header`}>
    <Logo />

    <div className="Header__Right">
      <Navigation />
    </div>

    <Burger
    className="Header__Burger"
    menuIsOpened={menuIsOpened}
    toggleMenu={toggleMenu}
    burgerRef={burgerRef}
    />
  </header>
);
