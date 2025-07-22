export interface City {
  id: string;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface Weather {
  temperature: number;
  description: string;
  icon?: string;
  windSpeed?: number;
  precipitation?: number;
}

export enum ActivityType {
  SKIING = 'SKIING',
  SURFING = 'SURFING',
  INDOOR_SIGHTSEEING = 'INDOOR_SIGHTSEEING',
  OUTDOOR_SIGHTSEEING = 'OUTDOOR_SIGHTSEEING',
}

export interface ActivityRanking {
  activity: ActivityType;
  score: number;
  reason?: string;
}