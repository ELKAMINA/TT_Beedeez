import {StationsRoute} from '@routes/stations.route';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {Station} from '../../components/list-stations/interface/station.interface';
import axios from 'axios';

interface stationsState {
  data: Station[];
  isLoaded: boolean;
  argSearch: string;
  argFilter: string;
}

const initialState: stationsState = {
  data: [],
  isLoaded: false,
  argSearch: '',
  argFilter: '',
};

const stationsSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {
    getStations: (state, action: PayloadAction<Station[]>) => {
      state.data = action.payload;
    },
    setIsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    setArgSearch: (state, action: PayloadAction<string>) => {
      state.argSearch = action.payload;
    },
    setArgFilter: (state, action: PayloadAction<string>) => {
      state.argFilter = action.payload;
    },
    resetArg: state => {
      state.argSearch = '';
    },
  },
});

export const {setIsLoaded, getStations, setArgSearch, setArgFilter, resetArg} =
  stationsSlice.actions;

export const selectStations = (state: RootState) =>
  state.persistedReducer.stations.data;
export const selectIsLoaded = (state: RootState) =>
  state.persistedReducer.stations.isLoaded;
export const selectArgSearch = (state: RootState) =>
  state.persistedReducer.stations.argSearch;
export const selectArgFilter = (state: RootState) =>
  state.persistedReducer.stations.argFilter;

const transformData = (arg: string, filter: string, data: Station[]) => {
  let stations = data;
  stations.sort((a: Station, b: Station) => {
    return a.name.localeCompare(b.name);
  });
  switch (filter) {
    case 'Mechanical Bikes':
      stations = stations.filter(
        (station: Station) =>
          station.num_bikes_available_types?.at(0)?.mechanical ?? false,
      );
      break;
    case 'eBikes':
      stations = stations.filter(
        (station: Station) =>
          station.num_bikes_available_types?.at(1)?.ebike ?? false,
      );
      break;
    case 'Both mechanical and eBikes':
      stations = stations.filter(
        (station: Station) =>
          station.num_bikes_available_types?.at(0)?.mechanical ??
          (false && station.num_bikes_available_types?.at(1)?.ebike) ??
          false,
      );
      break;
    case 'Busy':
      stations = stations.filter(
        (station: Station) => station.numBikesAvailable === 0,
      );
      break;
    case 'default':
      break;
  }
  if (arg) {
    stations = stations.filter((station: Station) =>
      station.name.toLowerCase().includes(arg.toLowerCase()),
    );
  }
  return stations;
};

export function FetchAllStations(arg: string, filter: string) {
  return async (dispatch: any) => {
    await axios
      .get('http://localhost:3000/stations')
      .then(res => {
        let data = res.data.data;
        data = transformData(arg, filter, data);
        // data.sort((a: Station, b: Station: Station) => {
        //   return a.name.localeCompare(b.name);
        // });
        // switch (filter) {
        //   case 'Mechanical Bikes':
        //     data = data.filter(
        //       (station: Station) =>
        //         station.num_bikes_available_types?.at(0)?.mechanical ?? false
        //     );
        //     break;
        //     case 'eBikes':
        //       data = data.filter(
        //         (station: Station) =>
        //           station.num_bikes_available_types?.at(1)?.ebike ?? false
        //       );
        //       break;
        //     case 'Both mechanical and eBikes' :
        //       data = data.filter(
        //         (station: Station) =>
        //           station.num_bikes_available_types?.at(0)?.mechanical ?? false &&
        //           station.num_bikes_available_types?.at(1)?.ebike ?? false
        //       );
        //       break;
        //     case 'Busy' :
        //       data = data.filter(
        //         (station: Station) =>
        //           station.numBikesAvailable === 0
        //       );
        //       break;
        //     case 'default' :
        //       break;
        // }
        // if (arg) {
        //   data = data.filter((station: Station) =>
        //     station.name.toLowerCase().includes(arg.toLowerCase())
        //     station.name.toLowerCase().includes(arg.toLowerCase()),
        //   );
        // }
        dispatch(getStations(data));
        dispatch(setIsLoaded(true));
      })
      .catch(e => {
        console.error(e);
        dispatch(setIsLoaded(false));
      });
  };
}
export default stationsSlice.reducer;
