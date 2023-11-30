import { User } from '../models/Kitty-prevuser.model';

export class ApiRepoKittyBook {
  apiUrl = 'http://localhost:2700/users';

  async getThings(): Promise<User[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createThings(newThing: Partial<User>): Promise<User> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(newThing),
      headers: {
        'Content-Type': 'application/json',
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

  async deleteThing(id: User['id']): Promise<User[]> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
