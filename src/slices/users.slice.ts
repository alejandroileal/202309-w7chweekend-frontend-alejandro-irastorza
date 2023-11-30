import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../models/Kitty-prevuser.model';
import { LoginResponse } from '../types/login.response';
import { loginThunk } from './users.thunk';

type LoginState = 'idle' | 'logging' | 'error';

type UsersState = {
  loggedUser: User | null;
  loginState: LoginState;
  token: string;
};

const initialState: UsersState = {
  loggedUser: null,
  loginState: 'idle',
  token: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state: UsersState, { payload }: PayloadAction<LoginResponse>) => {
      state.loggedUser = payload.user;
      state.token = payload.token;
    },
    logout: (state: UsersState) => {
      state.loggedUser = null;
      state.token = '';
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state: UsersState) => {
      state.loginState = 'logging';
    });
  },
});

export default userSlice.reducer;
export const ac = userSlice.actions;
