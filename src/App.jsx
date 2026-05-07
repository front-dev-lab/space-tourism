import { useState, useRef, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Styles
import './App.scss';

// Pages
import { HomePage } from './pages/HomePage';
import { DestinationPage } from './pages/DestinationPage';
import { CrewPage } from './pages/CrewPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Components
import { Header } from './components/Header';
import { Menu } from './components/Menu';

export const App = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  };

  const closeMenu = () => {
    setMenuIsOpened(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isNotMenu = menuRef.current && !menuRef.current.contains(e.target);
      const isNotBurger = burgerRef.current && !burgerRef.current.contains(e.target);

      if (!isNotMenu || !isNotBurger) {
        return;
      }

      closeMenu();
    };

    if (!menuIsOpened) {
      return;
    }

    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuIsOpened]);

  return (
    <div className="App">
      <Header
        className="App__Header"
        menuIsOpened={menuIsOpened}
        toggleMenu={toggleMenu}
        burgerRef={burgerRef}
      />

      <Menu
        menuRef={menuRef}
        closeMenu={closeMenu}
        className={menuIsOpened ? "App__Menu App__Menu--Active" : "App__Menu"}
      />

      <Routes>
        <Route
          index
          element={<HomePage className="App__Content" />}
        />

        <Route path="destinations" >
          <Route index element={<Navigate to="moon" replace />} />
          <Route path=':name' element={<DestinationPage className="App__Content" />} />
        </Route>

        <Route path="crew" >
          <Route index element={<Navigate to="douglas-hurley" replace />} />
          <Route path=':name' element={<CrewPage className="App__Content" />} />
        </Route>

        <Route path="technology" >
          <Route index element={<Navigate to="launch-vehicle" replace />} />
          <Route path=':name' element={<TechnologyPage className="App__Content" />} />
        </Route>

        <Route path="*" element={<NotFoundPage className="App__Content" />} />
      </Routes>
    </div>
  );
};
