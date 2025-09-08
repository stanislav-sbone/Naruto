import AppContainer from './components/AppContainer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <AppContainer>
      <Header />
      <main>
        <Home></Home>
      </main>
    </AppContainer>
  );
}

export default App;
