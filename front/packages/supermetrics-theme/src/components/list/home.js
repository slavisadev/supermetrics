import { connect, styled, decode } from "frontity";
import Pagination from "./pagination";

const Home = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
        <Header>
          <b>Our <a href="/products_archive">Products</a> page is waiting for you.</b>
        </Header>
      <Pagination />
    </Container>
  );
};

export default connect(Home);

const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
