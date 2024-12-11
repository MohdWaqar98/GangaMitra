export interface WaterQualityData {
  location: string;
  ph: number;
  dissolvedOxygen: number;
  BOD: number;
  turbidity: number;
  conductivity: number;
  timestamp: string;
  waterLevel: number;
  flowRate: number;
  totalcoliform: number;
}

export interface LocationData {
  id: string;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  riverSection: string;
  description: string;
}

export interface TrendData {
  timestamp: string;
  value: number;
}

export type MetricStatus = 'good' | 'moderate' | 'poor';