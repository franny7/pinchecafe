import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
