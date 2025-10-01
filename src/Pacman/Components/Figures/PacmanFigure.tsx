import React from 'react';

interface FigureProps {
  x: number; // colonne
  y: number; // ligne
}

const Figure: React.FC<FigureProps> = ({ x, y }) => {
  const style: React.CSSProperties = {
    gridColumnStart: x + 1,
    gridRowStart: y + 1,
  };

  return <div className="pacman" style={style} />;
};

export default Figure;
