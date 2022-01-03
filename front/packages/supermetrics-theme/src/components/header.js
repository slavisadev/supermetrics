import { connect, styled } from "frontity";
import Link from "./link";
import Navigation from "./navigation";

const Header = ({ state }) => {
  return (
    <>
      <Container className="container py-3">
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <LogoLink
              className="d-flex align-items-center text-dark text-decoration-none"
              href="/"
            >SuperMetrics</LogoLink>
            <Navigation />
          </div>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <MainTitle className="display-4 fw-normal">Welcome to our store</MainTitle>
            <p className="fs-5 text-muted">You will find various types of paintings</p>
          </div>
        </header>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

 const Container = styled.div`
   width: 960px;
 `;

const MainTitle = styled.h1`
  margin: 0;
  margin-bottom: 16px;
`;

const LogoLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 30px;
`;
