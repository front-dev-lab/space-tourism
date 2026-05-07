//Hooks
import { useFetch } from '../../hooks/useFetch';

// Styles
import './CrewPage.scss';

// Components
import { Loader } from '../../components/Loader';
import { PageContent } from '../../components/PageContent';

export const CrewPage = ({ className }) => {
  const { data: crew, loading } = useFetch('crew');

  return (
    <main className={`${className} CrewPage`}>
      {loading && <Loader />}
      
      {crew.length > 0 && <PageContent
        items={crew}
        title={{ number: 2,text: 'MEET YOUR CREW'}}
      />}
    </main>
  );
};
