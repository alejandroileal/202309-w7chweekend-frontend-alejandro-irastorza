import { createAsyncThunk } from '@reduxjs/toolkit';
import { Thing } from '../models/things.model';
import { ApiRepoThings } from '../services/api.repo.things';

export const loadThingsThunk = createAsyncThunk<Thing[], ApiRepoThings>(
  'things/load',
  async (repo) => {
    const things = repo.getThings();
    return things;
  }
);

type Params = {
  repo: ApiRepoThings;
  newThing: Partial<Thing>;
};

export const addThingsTunk = createAsyncThunk<Thing, Params>(
  'things/add',
  async ({ repo, newThing }) => {
    const finalThing = await repo.createThings(newThing);
    return finalThing;
  }
);

export const deleteThingsTunk = createAsyncThunk<
  Thing['id'],
  { repo: ApiRepoThings; id: Thing['id'] }
>('things/delete', async ({ repo, id }) => {
  await repo.deleteThing(id);
  return id;
});
