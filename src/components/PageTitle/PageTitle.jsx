// Styles
import './PageTitle.scss';

export const PageTitle = ({ number, text }) => (
  <h2 className="PageTitle">
    <span className="PageTitle__Number">
      0{number}
    </span>

    {text}
  </h2>
);
