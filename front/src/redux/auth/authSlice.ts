import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface authState {
  email: string;
  access_token: string;
  _id: string;
}

const initialState: authState = {
  email: '',
  access_token: '',
  _id: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setJwtTokens: (state, action) => {
      state.access_token = action.payload.access_token;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state._id = action.payload;
    },
  },
});

export const {setJwtTokens, setEmail, setId} = authSlice.actions;

export const selectCurrentUser = (state: RootState) =>
  state.persistedReducer.auth.email;
export const selectAccessToken = (state: RootState) =>
  state.persistedReducer.auth.access_token;
export const selectId = (state: RootState) => state.persistedReducer.auth._id;

export default authSlice.reducer;
