import { useLocation } from 'react-router-dom';

// Styles
import './PageContent.scss';

// Components
import { Container } from '../../components/Container';
import { PageTitle } from '../PageTitle';
import { Destination } from '../Destination';
import { Crew } from '../Crew';
import { Technology } from '../Technology';

export const PageContent = ({ items, title }) => {
  const { pathname } = useLocation();

  return (
    <section className="PageContent">
      <Container>
        <div className="PageContent__Content">
          <PageTitle
            number={title.number}
            text={title.text}
          />

          {pathname.includes('destinations') && <Destination destinations={items} />}

          {pathname.includes('crew') && <Crew crew={items} />}
        </div>
      </Container>

      {pathname.includes('technology') && <Technology technologies={items} />}
    </section>
  );
};
