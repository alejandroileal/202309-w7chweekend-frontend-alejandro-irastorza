import { serverUrl } from '../config';
import { User } from '../entities/user';
import { LoginUser } from '../models/Kitty-prevuser.model';
import { LoginResponse } from '../types/login.response';

export class ApiRepoUsers {
  apiUrl = serverUrl + '/users';

  async getUsers(): Promise<User[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createUsers(newUser: FormData): Promise<User> {
    const url = this.apiUrl + '/register';
    const response = await fetch(url, {
      method: 'POST',
      body: newUser,
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async login(loginUser: LoginUser): Promise<LoginResponse> {
    const url = this.apiUrl + '/login';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(loginUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async loginWithToken(token: string): Promise<LoginResponse> {
    const url = this.apiUrl + '/login';
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  //   async updateTask(id: Task['id'], updatedTask: Partial<Task>): Promise<Task> {
  //     const finalUrl = `${this.apiUrl}/${id}`;
  //     const response = await fetch(finalUrl, {
  //       method: 'PATCH',
  //       body: JSON.stringify(updatedTask),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (!response.ok)
  //       throw new Error(response.status + ' ' + response.statusText);
  //     return response.json();
  //   }

  //   async deleteThing(id: User['id']): Promise<User[]> {
  //     const finalUrl = `${this.apiUrl}/${id}`;
  //     const response = await fetch(finalUrl, {
  //       method: 'DELETE',
  //     });
  //     if (!response.ok)
  //       throw new Error(response.status + ' ' + response.statusText);
  //     return response.json();
  //   }
}
