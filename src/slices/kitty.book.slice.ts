import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../models/Kitty-prevuser.model';
import { loadUsersThunk } from './kitty.book.tunks';

export type KittyBookState = {
  currentUser: User;
  allUsers: User[];
  status: 'idle' | 'loading' | 'error';
};

const initialState: KittyBookState = {
  currentUser: {} as User,
  allUsers: [],
  status: 'idle',
};

export const kittyBookSlice = createSlice({
  name: 'kittybook',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUsersThunk.pending, (state: KittyBookState) => {
      state.status = 'loading';
      return state;
    }),
      builder.addCase(
        loadUsersThunk.fulfilled,
        (state: KittyBookState, { payload }: PayloadAction<User[]>) => {
          state.allUsers = payload;
          state.status = 'idle';
          return state;
        }
      ),
      builder.addCase(loadUsersThunk.rejected, (state: KittyBookState) => {
        state.status = 'error';
        return;
      });
  },
});

export default kittyBookSlice.reducer;
