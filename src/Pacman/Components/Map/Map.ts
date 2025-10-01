// Définition des types de cellules
export type CellType = 'wall' | 'dot' | 'path';

// Représentation brute de la carte avec des symboles
const RAW_MAP: string[][] = [
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
  ['W', '.', '.', '.', 'W', '.', '.', 'W'],
  ['W', '.', 'W', '.', '.', '.', 'W', 'W'],
  ['W', '.', 'W', 'W', 'W', '.', '.', 'W'],
  ['W', '.', '.', '.', '.', '.', '.', 'W'],
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
];

// Fonction utilitaire pour convertir les symboles en types
export function parseMap(raw: string[][]): CellType[][] {
  return raw.map(row =>
    row.map(cell => {
      switch (cell) {
        case 'W':
          return 'wall';
        case '.':
          return 'dot';
        default:
          return 'path';
      }
    })
  );
}

// Carte finale prête à être utilisée dans le composant
export const MAP_LAYOUT: CellType[][] = parseMap(RAW_MAP);
