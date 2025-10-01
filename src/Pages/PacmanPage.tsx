import React from 'react';
import { Link } from 'react-router-dom';
import PacmanMap from '../Pacman/Components/Map/PacmanMap'; // adapte le chemin si nécessaire

const PacmanPage: React.FC = () => {
  return (
    <div className="retro-container">
            <div style={{ marginTop: '20px' }}>
        <Link to="/" className="retro-button">
          ⬅ Retour à l'accueil
        </Link>
      </div>
      <h1 className="retro-title">Pac-Man</h1>
      <PacmanMap />
    </div>
  );
};

export default PacmanPage;
