import { Thing } from '../models/things.model';

export class ApiRepoThings {
  apiUrl = 'http://localhost:2700/things';

  async getThings(): Promise<Thing[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createThings(newThing: Partial<Thing>): Promise<Thing> {
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

  async deleteThing(id: Thing['id']): Promise<Thing[]> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
