import GlobalStyle from './globalStyled';
import { ThemeModeProvider } from './components/ThemeMode';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <ThemeModeProvider>
      <GlobalStyle />
      <AnimatedRoutes />
    </ThemeModeProvider>
  );
}

export default App;
