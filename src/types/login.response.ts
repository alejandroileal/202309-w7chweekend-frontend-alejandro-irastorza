// Son los tipos que recibo cuando hago login

import { User } from '../models/Kitty-prevuser.model';

export type LoginResponse = {
  user: User;
  token: string;
};
