import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Thing } from '../models/things.model';
import { loadThingsThunk } from './things.thunks';

export type ThingsState = {
  things: Thing[];
  status: 'idle' | 'loading' | 'error';
};

const initialState: ThingsState = {
  things: [],
  status: 'idle',
};

export const thingsSlice = createSlice({
  name: 'things',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadThingsThunk.pending, (state: ThingsState) => {
      state.status = 'loading';
      return state;
    }),
      builder.addCase(
        loadThingsThunk.fulfilled,
        (state: ThingsState, { payload }: PayloadAction<Thing[]>) => {
          state.things = payload;
          state.status = 'idle';
          return state;
        }
      ),
      builder.addCase(loadThingsThunk.rejected, (state: ThingsState) => {
        state.status = 'error';
        return;
      });
  },
});

export default thingsSlice.reducer;
