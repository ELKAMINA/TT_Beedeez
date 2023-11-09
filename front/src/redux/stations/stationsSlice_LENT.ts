import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {Station} from '../../components/list-stations/interface/station.interface';
import axios from 'axios';

interface stationsState {
  data: Station[];
  isLoaded: boolean;
  isLoading: boolean;
  page: number;
  hasMore: boolean;
}

const initialState: stationsState = {
  data: [],
  isLoaded: false,
  isLoading: false,
  page: 1,
  hasMore: true,
};

const pageSize = 10;

const stationsSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {
    // getStations: (state, action: PayloadAction<Station[]>) => {
    //   state.data = action.payload;
    // },
    // isLoading: (state, action: PayloadAction<boolean>) => {
    //   state.isLoaded = action.payload;
    // },
    setStations: (state, action: PayloadAction<Station[]>) => {
      state.data.push(...action.payload);
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    incrementPage: state => {
      state.page += 1;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(FetchAllStations, (state, action) => {
      state.isLoaded = true;
    });
  },
});

export const {setIsLoading, setHasMore, setStations, incrementPage} =
  stationsSlice.actions;

export const selectStations = (state: RootState) =>
  state.persistedReducer.stations.data;
export const selectIsLoaded = (state: RootState) =>
  state.persistedReducer.stations.isLoaded;
export const selectIsLoading = (state: RootState) =>
  state.persistedReducer.stations.isLoading;
export const selectHasMore = (state: RootState) =>
  state.persistedReducer.stations.hasMore;

export const FetchAllStations = createAsyncThunk(
  'stations/fetchAllStations',
  async (_, {getState, dispatch}) => {
    const state = getState() as RootState;
    const page = state.persistedReducer.stations.page;
    const hasMore = state.persistedReducer.stations.hasMore;

    // If there's no more data to fetch, don't do anything
    if (!hasMore) {
      return;
    }

    dispatch(setIsLoading(true));

    try {
      const response = await axios.get('http://localhost:3000/stations', {
        params: {page, pageSize},
      });

      dispatch(setStations(response.data.data));
      dispatch(setIsLoading(false));

      // If the number of stations returned is less than the pageSize, we've reached the end
      if (response.data.data.length < pageSize) {
        dispatch(setHasMore(false));
      }

      // Increment page for next fetch
      dispatch(incrementPage());
    } catch (error) {
      dispatch(setIsLoading(false));
      console.error(error);
    }
  },
);

export default stationsSlice.reducer;
