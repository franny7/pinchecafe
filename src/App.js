import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Nav/Nav';
import Cards from './Components/Cards/Cards'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
