import { useParams } from 'react-router-dom';

// Styles
import './Destination.scss';

// Components
import { Tabs } from '../Tabs';
import { DestinationInfo } from '../DestinationInfo';

export const Destination = ({ destinations }) => {
  const { name } = useParams() || 'moon';
  const selectedDestination = destinations.find(
    destination => destination.name.toLowerCase() === name
  );

  return (
    <div className="Destination">
      <img
        src={selectedDestination.images}
        alt={selectedDestination.name}
        className="Destination__Image"
      />

      <div className="Destination__Column">
        <Tabs type="destinations" items={destinations} />

        <article className="Destination__Article">
          <h3 className="Destination__Title">
            {selectedDestination.name}
          </h3>

          <p className="Destination__Text">
            {selectedDestination.description}
          </p>

          <DestinationInfo
            distance={selectedDestination.distance}
            travelTime={selectedDestination.travel}
          />
        </article>
      </div>
    </div>
  );
};
