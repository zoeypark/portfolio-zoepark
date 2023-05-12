import { ThemeProvider } from 'styled-components';
import Router from './router/Router';
import GlobalStyle from './styles/globalStyles';
import theme from './styles/theme';
import { Header, MainHeader } from './components/Molecules/Header';
import { useLocation } from 'react-router';
import Main from './components/Pages/Main';
import AboutMe from './components/Pages/AboutMe';
import Project from './components/Pages/Project';
import Contact from './components/Pages/Contact';


function App() {
  const location = useLocation();
  console.log(location);
  return (
    <ThemeProvider theme={theme}>
      {window.location.pathname === '/' || window.location.pathname === '/contact' ? <MainHeader/> : <Header/>}
      {window.location.pathname === '/' ? <Main /> : ''}
      {window.location.pathname === '/aboutme' ? <AboutMe /> : ''}
      {window.location.pathname === '/project' ? <Project /> : ''}
      {window.location.pathname === '/contact' ? <Contact /> : ''}
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
