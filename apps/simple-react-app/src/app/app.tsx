import styled from '@emotion/styled';
import ProductsList from './products-list';


const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;
`;

export function App() {
  return (
    <StyledApp>
      <header className="flex">
        <h1>Welcome to simple-react-app!</h1>
      </header>
      <main>
        <ProductsList />
      </main>
    </StyledApp>
  );
}

export default App;
