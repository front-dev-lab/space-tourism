import { useParams } from 'react-router-dom';

// Styles
import './Technology.scss';

// Components
import { Tabs } from '../Tabs';
import { SectionTitle } from '../SectionTitle';

export const Technology = ({ technologies }) => {
  const { name } = useParams() || 'launch-vehicle';
  const selectedTechnology= technologies.find(
    technology => technology.name.toLowerCase().replaceAll(' ', '-') === name
  );

  return (
    <div className="Technology">
      <div className="Technology__Column">
        <Tabs type="technology" items={technologies} />

        <article className="Technology__Article">
          <SectionTitle title={selectedTechnology.name} />

          <p>
            {selectedTechnology.description}
          </p>
        </article>
      </div>

      <img
        src={selectedTechnology.images}
        alt={selectedTechnology.name}
        className="Technology__Image"
      />
    </div>
  );
};
