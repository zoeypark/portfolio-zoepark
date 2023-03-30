import styled from 'styled-components';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <Container>
      <GlobalStyle/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export default App;
