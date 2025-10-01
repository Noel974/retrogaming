import React, { useState } from 'react';
import Figure from '../Figures/PacmanFigure';
import { MAP_LAYOUT } from './Map';

const PacmanMap: React.FC = () => {
  const [position, setPosition] = useState({ x: 1, y: 1 }); // position initiale

  return (
    <div className="map-grid">
      {MAP_LAYOUT.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`cell ${cell}`}
          />
        ))
      )}
      <Figure x={position.x} y={position.y} />
    </div>
  );
};

export default PacmanMap;
