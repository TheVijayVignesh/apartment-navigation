export const nodes = [
  { id: 0, name: "Moonstone", x: 550, y: 100 },
  { id: 1, name: "Topaz", x: 500, y: 200 },
  { id: 2, name: "Emerald_M", x: 630, y: 220 },
  { id: 3, name: "Emerald_F", x: 640, y: 310 },
  { id: 4, name: "Clubhouse", x: 470, y: 380 },
  { id: 5, name: "Velammal_School", x: 350, y: 420 },
  { id: 6, name: "Ruby_N", x: 650, y: 450 },
  { id: 7, name: "Ruby_M", x: 670, y: 540 },
  { id: 8, name: "Sapphire", x: 330, y: 510 },
  { id: 9, name: "Sapphire_1", x: 410, y: 520 },
  { id: 10, name: "Coral", x: 310, y: 580 },
  { id: 11, name: "Citrine", x: 290, y: 680 },
  { id: 12, name: "Woods", x: 450, y: 650 },
  { id: 13, name: "Jade", x: 680, y: 640 },
  { id: 14, name: "The_Park", x: 800, y: 580 },
  { id: 15, name: "Garnet", x: 450, y: 750 },
  { id: 16, name: "Amber", x: 560, y: 750 },
  { id: 17, name: "Amethyst", x: 650, y: 760 },
  { id: 18, name: "MPH", x: 560, y: 790 },
  { id: 19, name: "Sky_Villa", x: 640, y: 870 },
  { id: 20, name: "Jasper", x: 520, y: 920 }
];

export const adjacencyMatrix = [
  [0, 100, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [100, 0, 140.36, Infinity, 162.79, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, 140.36, 0, 110, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, 110, 0, Infinity, Infinity, 150, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, 162.79, Infinity, Infinity, 0, 141.42, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, 141.42, 0, Infinity, Infinity, 101.98, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, 150, Infinity, Infinity, 0, 100, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 100, 0, Infinity, Infinity, Infinity, Infinity, Infinity, 44.72, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, 101.98, Infinity, Infinity, 0, 80, 82.46, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 80, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 82.46, Infinity, 0, 100, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 100, 0, 148.66, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 148.66, 0, Infinity, Infinity, 140.36, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 44.72, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 121.66, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 121.66, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 140.36, Infinity, Infinity, 0, 110, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 110, 0, 100, 40, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 100, 0, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 40, Infinity, 0, 108.17, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 108.17, 0, 130.86],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 130.86, 0]
];

function heuristic(nodeA, nodeB) {
  // Euclidean distance scaled by an arbitrary factor to match the matrix weights closely
  // Since we don't know the exact scale, we just use direct Euclidean.
  const dx = nodes[nodeA].x - nodes[nodeB].x;
  const dy = nodes[nodeA].y - nodes[nodeB].y;
  return Math.sqrt(dx * dx + dy * dy) * 0.5; // Scale down slightly so heuristic isn't an overestimate
}

export function findPathAStar(startId, endId) {
  const openSet = new Set([startId]);
  const cameFrom = new Map();
  
  const gScore = Array(nodes.length).fill(Infinity);
  gScore[startId] = 0;
  
  const fScore = Array(nodes.length).fill(Infinity);
  fScore[startId] = heuristic(startId, endId);
  
  while (openSet.size > 0) {
    let current = null;
    let lowestFScore = Infinity;
    
    for (const node of openSet) {
      if (fScore[node] < lowestFScore) {
        lowestFScore = fScore[node];
        current = node;
      }
    }
    
    if (current === endId) {
      return reconstructPath(cameFrom, current);
    }
    
    openSet.delete(current);
    
    for (let neighbor = 0; neighbor < nodes.length; neighbor++) {
      const edgeWeight = adjacencyMatrix[current][neighbor];
      if (edgeWeight !== Infinity && edgeWeight > 0) {
        const tentativeGScore = gScore[current] + edgeWeight;
        
        if (tentativeGScore < gScore[neighbor]) {
          cameFrom.set(neighbor, current);
          gScore[neighbor] = tentativeGScore;
          fScore[neighbor] = tentativeGScore + heuristic(neighbor, endId);
          openSet.add(neighbor);
        }
      }
    }
  }
  
  return []; // No path found
}

function reconstructPath(cameFrom, current) {
  const path = [current];
  while (cameFrom.has(current)) {
    current = cameFrom.get(current);
    path.unshift(current);
  }
  return path;
}
