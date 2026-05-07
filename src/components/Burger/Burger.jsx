// Styles
import './Burger.scss';

export const Burger = ({
  className,
  menuIsOpened,
  toggleMenu,
  burgerRef
}) => {
  const burgerClassName = `${className} Burger`;

  return (
    <button
      ref={burgerRef}
      onClick={toggleMenu}
      className={
        menuIsOpened ? `${burgerClassName} Burger--Active` : burgerClassName
      }
    >
      <span className={
        menuIsOpened ? "Burger__Line Burger__Line--Active" : "Burger__Line"
      }></span>
    </button>
  );
};
