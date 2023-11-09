import {StationsRoute} from '@routes/stations.route';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {Station} from '../../components/list-stations/interface/station.interface';
import axios from 'axios';

interface stationsState {
  data: Station[];
  isLoaded: boolean;
  argSearch: string;
}

const initialState: stationsState = {
  data: [],
  isLoaded: false,
  argSearch: '',
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
    resetArg: state => {
      state.argSearch = '';
    },
  },
});

export const {setIsLoaded, getStations, setArgSearch, resetArg} =
  stationsSlice.actions;

export const selectStations = (state: RootState) =>
  state.persistedReducer.stations.data;
export const selectIsLoaded = (state: RootState) =>
  state.persistedReducer.stations.isLoaded;
export const selectArgSearch = (state: RootState) =>
  state.persistedReducer.stations.argSearch;

export function FetchAllStations(arg: string) {
  return async (dispatch: any) => {
    await axios
      .get('http://localhost:3000/stations')
      .then(res => {
        let data = res.data.data;
        data.sort((a: Station, b: Station) => {
          return a.name.localeCompare(b.name);
        });
        if (arg) {
          data = data.filter((station: Station) =>
            station.name.toLowerCase().includes(arg.toLowerCase()),
          );
        }
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
