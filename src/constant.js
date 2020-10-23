export function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const gares = [
  {
    name: "Paris Gare de Lyon",
    code: 87686030,
    lat: 48.844304,
    lng: 2.374377,
  },
  {
    name: "Paris Saint-Lazare",
    code: 87384008,
    lat: 48.8763,
    lng: 2.3254,
  },
  {
    name: "Aéroport Charles de Gaulle",
    code: 87271460,
    lat: 49.009691,
    lng: 2.547925,
  },
];

export const steps = [
  { value: 1, time: "Avant 6h" },
  { value: 2, time: "De 6h à 10h" },
  { value: 3, time: "De 10h à 16h" },
  { value: 4, time: "De 16h à 20h" },
  { value: 5, time: "Après 20h" },
];
