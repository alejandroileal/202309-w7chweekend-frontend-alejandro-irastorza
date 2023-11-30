import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import thingsReducer from '../slices/things.slice';
import usersReducer from '../slices/users.slice.js';
import kittyBookReducer from '../slices/kitty.book.slice';

export const store = configureStore({
  reducer: {
    things: thingsReducer,
    kittyBook: kittyBookReducer,
    usersState: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
