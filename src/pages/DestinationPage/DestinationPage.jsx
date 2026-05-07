//Hooks
import { useFetch } from '../../hooks/useFetch';

// Styles
import './DestinationPage.scss';

// Components
import { Loader } from '../../components/Loader';
import { PageContent } from '../../components/PageContent';

export const DestinationPage = ({ className }) => {
  const { data: destinations, loading } = useFetch('destinations');

  return (
    <main className={`${className} DestinationPage`}>
      {loading && <Loader />}

      {destinations.length > 0 && <PageContent
        items={destinations}
        title={{ number: 1, text: 'PICK YOUR DESTINATION' }}
      />}
    </main>
  );
};
