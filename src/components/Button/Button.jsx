import { Link } from 'react-router-dom';

// Styles
import './Button.scss';

export const Button = ({ to, text }) => (
  <button className="Button">
    <Link to={to} className="Button__Link">
      {text}
    </Link>
  </button>
);
