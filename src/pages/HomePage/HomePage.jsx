// Styles
import './HomePage.scss';

// Components
import { Container } from '../../components/Container';
import { Button } from '../../components/Button';

export const HomePage = ({ className }) => (
  <main className={`${className} HomePage`}>
    <Container>
      <div className="HomePage__Content">
        <article className="HomePage__Article">
          <h1 className="HomePage__Title">
            <span className="HomePage__TitleText">
              SO, YOU WANT TO TRAVEL TO
            </span>

            Space
          </h1>

          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </article>

        <Button to="destinations" text="Explore" />
      </div>
    </Container>
  </main>
);
