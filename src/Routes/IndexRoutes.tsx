import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import MarioPage from '../Pages/MarioPage';
import PacmanPage from '../Pages/PacmanPage';
import AboutPage from '../Pages/AboutPage';

function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mario" element={<MarioPage />} />
        <Route path="/pacman" element={<PacmanPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default IndexRoutes;
