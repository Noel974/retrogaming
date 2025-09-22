import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="retro-about-container">
      <h1 className="retro-title">ℹ️ À propos</h1>

      <section className="retro-section">
        <h2>🕹️ Le site</h2>
        <p>
          Ce site est une plongée dans l’univers du rétro gaming. Il rend hommage aux classiques comme Mario et Pacman,
          avec une interface pixelisée et une ambiance arcade. L’objectif est de faire revivre la nostalgie des années 80-90
          tout en offrant une navigation moderne et fluide.
        </p>
      </section>

      <section className="retro-section">
        <h2>💻 L'entreprise</h2>
        <p>
          Je suis auto-entrepreneur spécialisé dans la conception de logiciels sur mesure. Passionné par le développement
          web et les interfaces créatives, je propose des solutions adaptées aux besoins des particuliers et des entreprises :
          applications web, outils métiers, sites vitrines, et plus encore. Mon approche est centrée sur la qualité, la simplicité
          et l’innovation.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
