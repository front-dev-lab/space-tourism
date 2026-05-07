// Styles
import './SectionTitle.scss';

export const SectionTitle = ({ title, text = 'The terminology...' }) => (
  <h3 className="SectionTitle">
    <span className="SectionTitle__Text">
      {text}
    </span>

    {title}
  </h3>
);
