import AppContainer from './components/AppContainer';
import Header from './components/Header';
import AppRoutes from './routes/routes';
import ThemeProvider from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <Header />
        <main>
          <AppRoutes />
        </main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
