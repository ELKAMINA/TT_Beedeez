/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface authState {
  email: string;
  access_token: string;
  _id: string;
  password: string;
}

const initialState: authState = {
  email: '',
  access_token: '',
  _id: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setJwtTokens: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state._id = action.payload;
    },
    setPwd: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetAuth: state => {
      return initialState;
    },
  },
});

export const {setJwtTokens, setEmail, setId, resetAuth, setPwd} =
  authSlice.actions;

export const selectCurrentUser = (state: RootState) =>
  state.persistedReducer.auth.email;
export const selectAccessToken = (state: RootState) =>
  state.persistedReducer.auth.access_token;
export const selectId = (state: RootState) => state.persistedReducer.auth._id;
export const selectPwd = (state: RootState) =>
  state.persistedReducer.auth.password;

export default authSlice.reducer;
