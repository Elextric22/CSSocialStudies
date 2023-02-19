import logo from './idk.png';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import './App.css';
import Navbar from './Navbar';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Censorship from './pages/Censorship';
import Immortalyiyty from './pages/Immortalyiyty';
import Legalism from './pages/Legalism';
import ModernDay from './pages/ModernDay';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <header className="App-header">
        
      </header>
      <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/censorship" element={<Censorship/>} />
            <Route path="/immortaly" element={<Immortalyiyty/>} />
            <Route path="/legalism" element={<Legalism/>} />
            <Route path="/modernday" element={<ModernDay/>} />
          </Routes>
            </main>
    </div>
        </Router>
  );
}

export default App;
