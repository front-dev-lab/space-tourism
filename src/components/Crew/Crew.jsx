import { useParams } from 'react-router-dom';

// Styles
import './Crew.scss';

// Components
import { SectionTitle } from '../SectionTitle';
import { Tabs } from '../Tabs';

export const Crew = ({ crew }) => {
  const { name } = useParams() || 'douglas-hurley';
  const selectedMember = crew.find(
    member => member.name.toLowerCase().replaceAll(' ', '-') === name
  );

  return (
    <div className="Crew">
      <div className="Crew__Column">
        <article className="Crew__Article">
          <SectionTitle
            title={selectedMember.name}
            text={selectedMember.role}
          />

          <p className="Crew__Bio">
            {selectedMember.bio}
          </p>
        </article>

        <Tabs type="crew" items={crew} />
      </div>

      <img
        src={selectedMember.image}
        alt={selectedMember.name}
        className="Crew__Image"
      />
    </div>
  );
};
