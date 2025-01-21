import './App.css';
import { Home } from './pages/Home/index';
import Prospects from './pages/Prospects/index';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ position: 'relative' }}>
          {/* Fixed Header */}
          <Header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10 }} />

          {/* Routing for pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Prospects" element={<Prospects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
