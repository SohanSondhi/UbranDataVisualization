export interface TownLabel {
  name: string;
  coords: [number, number];
}

export const townLabels: TownLabel[] = [
  { name: "Inglewood", coords: [33.9617, -118.3534] },
  { name: "West Hollywood", coords: [34.0900, -118.3617] },
  { name: "Downtown LA", coords: [34.0407, -118.2468] },
  { name: "Culver City", coords: [34.0211, -118.3965] },
  { name: "Westwood", coords: [34.0635, -118.4455] },
  { name: "South LA", coords: [33.9716, -118.2781] },
];
