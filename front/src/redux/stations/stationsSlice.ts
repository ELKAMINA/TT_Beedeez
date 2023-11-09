import {StationsRoute} from '@routes/stations.route';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {Station} from '../../components/list-stations/interface/station.interface';
import axios from 'axios';

interface stationsState {
  data: Station[];
  isLoaded: boolean;
}

const initialState: stationsState = {
  data: [],
  isLoaded: false,
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
  },
});

export const {setIsLoaded, getStations} = stationsSlice.actions;

export const selectStations = (state: RootState) =>
  state.persistedReducer.stations.data;
export const selectIsLoaded = (state: RootState) =>
  state.persistedReducer.stations.isLoaded;

export function FetchAllStations() {
  return async (dispatch: any) => {
    await axios
      .get('http://localhost:3000/stations')
      .then(res => {
        const data = res.data.data;
        data.sort((a: Station, b: Station) => {
          return a.name.localeCompare(b.name);
        });
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
