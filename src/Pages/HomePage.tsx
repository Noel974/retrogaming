import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="retro-container">
      <h1 className="retro-title">🎮 Bienvenue dans l'univers rétro !</h1>
      <div className="button-group">
        {/* Liens pour la navigation */}
        <Link to="/mario" className="retro-button">
          Mario
        </Link>
        <Link to="/pacman" className="retro-button">
          Pacman
        </Link>
        <Link to="/a-propos" className="retro-button">
          À propos
        </Link>
      </div>
    </div>
  );
};

export default HomePage;