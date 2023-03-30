import styled from 'styled-components';
import Router from './router/Router';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <Container>
      <GlobalStyle/>
      <Router/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export default App;
