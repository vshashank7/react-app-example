import './App.css';
import Header from './components/Header/Header';
import AnimalDetails from './components/AnimalDetails/AnimalDetails';
import TabContent from './components/TabContent/TabContent';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <AnimalDetails />
      <TabContent />
      </main>
    </div>
  );
}

export default App;
