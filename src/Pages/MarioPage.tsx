import React from 'react';
import { Link } from 'react-router-dom';

const MarioPage: React.FC = () => {
  return (
    <div className="retro-container">
                  <div style={{ marginTop: '20px' }}>
        <Link to="/" className="retro-button">
          ⬅ Retour à l'accueil
        </Link>
      </div>
      <h1 className="retro-title">Mario</h1>

    </div>
  );
};

export default MarioPage;