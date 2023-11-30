import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../models/Kitty-prevuser.model';
import { ApiRepoKittyBook } from '../services/api.repo.kitty.book';

export const loadUsersThunk = createAsyncThunk<User[], ApiRepoKittyBook>(
  'things/load',
  async (repo) => {
    const things = repo.getThings();
    return things;
  }
);
