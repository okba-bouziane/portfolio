import GlobalStyle from './globalStyled';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './components/Theme';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <AnimatedRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
