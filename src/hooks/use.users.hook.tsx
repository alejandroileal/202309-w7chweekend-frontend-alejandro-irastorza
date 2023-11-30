import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { ac } from '../slices/users.slice';
import { ApiRepoUsers } from '../services/api.repo.users';
import { loginThunk, loginTokenThunk } from '../slices/users.thunk';
import { LoginUser } from '../models/Kitty-prevuser.model';
import { User } from '../entities/user';
import { Storage } from '../services/storage';

export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();

  const repo = new ApiRepoUsers();
  const userStore = new Storage<{ token: string }>('user');

  const login = (loginUser: LoginUser) => {
    dispatch(loginThunk({ loginUser, repo, userStore }));
  }; // Disparar la acción ya definida para logout

  const loginWithToken = (token: string) => {
    const userStoreData = userStore.get();
    if (userStoreData) {
      const token = userStoreData.token;
      dispatch(loginTokenThunk({ token, repo, userStore }));
    }
  };

  const logout = () => {
    dispatch(ac.logout());
    userStore.remove();
  };

  const register = (newUser: FormData) => {
    repo.createUsers(newUser);
  };

  return { logout, login, register, loginWithToken };
}
