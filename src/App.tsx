import AppContainer from './components/AppContainer';
import Header from './components/Header';
import AppRoutes from './routes/routes';

function App() {
  return (
    <AppContainer>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </AppContainer>
  );
}

export default App;
