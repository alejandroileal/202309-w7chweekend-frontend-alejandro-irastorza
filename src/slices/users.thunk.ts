import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../types/login.response';
import { LoginUser } from '../entities/user';
import { ApiRepoUsers } from '../services/api.repo.users';
import { Storage } from '../services/storage';

// type LoginThunk = {
//   loginResponse: LoginResponse;
//   params: {
//     repo: ApiRepoUsers;
//     loginUser: LoginUser;
//   };
// };

export const loginThunk = createAsyncThunk<
  LoginResponse,
  {
    repo: ApiRepoUsers;
    loginUser: LoginUser;
    userStore: Storage<{ token: string }>;
  }
>('login', async ({ loginUser, repo, userStore }) => {
  const loginResponse = await repo.login(loginUser);
  userStore.set({ token: loginResponse.token });
  return loginResponse;
});

export const loginTokenThunk = createAsyncThunk<
  LoginResponse,
  { repo: ApiRepoUsers; token: string; userStore: Storage<{ token: string }> }
>('loginToken', async ({ token, repo, userStore }) => {
  const loginResponse = await repo.loginWithToken(token);
  userStore.set({ token: loginResponse.token });
  return loginResponse;
});
