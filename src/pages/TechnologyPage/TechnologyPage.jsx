//Hooks
import { useFetch } from '../../hooks/useFetch';

// Styles
import './TechnologyPage.scss';

// Components
import { Loader } from '../../components/Loader';
import { PageContent } from '../../components/PageContent';


export const TechnologyPage = ({ className }) => {
  const { data: technologies, loading } = useFetch('technology');

  return (
    <main className={`${className} TechnologyPage`}>
      {loading && <Loader />}

      {technologies.length > 0 && <PageContent
        items={technologies}
        title={{ number: 3, text: 'SPACE LAUNCH 101' }}>
      </PageContent>}
    </main>
  );
};
