import { useParams, Link } from 'react-router-dom';
import { capitalize } from '../../utils/capitalize';

// Styles
import './Tabs.scss';

export const Tabs = ({ type, items }) => {
  const { name } = useParams();
  const typeName = capitalize(type);

  return (
    <ul className={`Tabs Tabs--${typeName}`}>
      {items.map((item, i) => {
        const itemName = item.name.toLowerCase().replaceAll(' ', '-');

        return (
          <li key={item.id}>
            <Link
              to={`/${type}/${itemName}`}
              className={itemName === name
                  ? `Tabs__${typeName}Bullet Tabs__${typeName}Bullet--Active`
                  : `Tabs__${typeName}Bullet`}
            >
              {type === 'destinations' && item.name}
              {type === 'technology' && i + 1}
            </Link>
          </li>
        )
      })}
    </ul>
  );
};
