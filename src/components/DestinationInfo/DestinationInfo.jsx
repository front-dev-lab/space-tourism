// Styles
import './DestinationInfo.scss';

export const DestinationInfo = ({ distance, travelTime }) => (
  <div className="DestinationInfo">
    <div className="DestinationInfo__Column">
      <p>
        AVG. DISTANCE
      </p>

      <p className="DestinationInfo__Value">
        {distance}
      </p>
    </div>

    <div className="DestinationInfo__Column">
      <p>
        Est. travel time
      </p>

      <p className="DestinationInfo__Value">
        {travelTime}
      </p>
    </div>
  </div>
);
