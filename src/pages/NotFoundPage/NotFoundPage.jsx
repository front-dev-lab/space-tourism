// Styles
import './NotFoundPage.scss';

// Components
import { Container} from '../../components/Container';
import { Button } from '../../components/Button';

export const NotFoundPage = ({ className }) => (
  <main className={`${className} NotFoundPage`}>
    <Container>
      <div className="NotFoundPage__Content">
        <h2 className="NotFoundPage__Title">
          404 Page not found
        </h2>

        <Button to="/" text="Go back" />
      </div>
    </Container>
  </main>
);
