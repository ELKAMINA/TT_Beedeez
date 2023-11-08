export interface Station {
  _id: string;
  station_id: number;
  __v: number;
  capacity: number;
  createdAt: Date;
  lat: number;
  lon: number;
  name: string;
  num_bikes_available_types: Array<{mechanical: number; ebike: number}>;
  updatedAt: Date;
  is_installed: number;
  is_renting: number;
  is_returning: number;
  last_reported: number;
  numBikesAvailable: number;
  numDocksAvailable: number;
  num_bikes_available: number;
  num_docks_available: number;
  stationCode: string;
}
