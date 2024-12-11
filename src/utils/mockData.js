import { i, u } from "framer-motion/client";

export const locations = [
  {
    id: '1',
    name: 'Jail Ghat, Buxar (Bihar)',
    coordinates: { lat: 25.519940, lng: 83.900847 },
   
  },
  {
    id: '2',
    name: 'Cremation ghat (Bihar)',
    coordinates: { lat: 25.281489, lng: 87.247598 },
    
  },
  {
    id: '3',
    name: 'Khagra, Beharampore (W.B.)',
    coordinates: { lat:  24.100623, lng: 88.243263 },
   
  },
  {
    id: '4',
    name: 'Diamond Harbour (W.B.)',
    coordinates: { lat: 22.183389, lng: 88.186222 },
   
  },
  {
    id: '5',
    name: 'Bijnor (U.P.)',
    coordinates: { lat: 29.373472, lng: 78.040972 },
    
  },
  {
    id: '6',
    name: 'Sultanpur (U.K.)',
    coordinates: { lat: 29.641083, lng:  78.101750 },
   
  },
  {
    id: '7',
    name: 'Tarighat Ghazipur (U.P.)',
    coordinates: { lat: 25.587222, lng: 83.605361 },
   
  },
  {
    id: '8',
    name: 'Manjhighat (Bihar)',
    coordinates: { lat: 25.733210, lng: 84.622470 },
   
  },
  {
    uid: '9',
    name: ' LCT Ghat (Jharkhand)',
    coordinates: { lat: 25.292498, lng:  87.631830 },
   
  },
  {
    uid: '10',
    name: 'Raj Mahal (Bihar)',
    coordinates: { lat: 25.054889, lng:  87.838639 },
   
  },
  
];

export const generateMockData = (locationId) => {
  const location = locations.find(loc => loc.id === locationId)?.name || '';
  return {
    location,
    ph: 6.5 + Math.random() * 2,
    dissolvedOxygen: 4 + Math.random() * 4,
    BOD: 20 + Math.random() * 10,
    turbidity: 5 + Math.random() * 15,
    conductivity: 200 + Math.random() * 300,
    waterLevel: 2 + Math.random() * 3,
    flowRate: 100 + Math.random() * 200,
    totalcoliform: 150 + Math.random() * 250,
    timestamp: new Date().toISOString(),
  };
};