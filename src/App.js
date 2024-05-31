import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/homepage/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
