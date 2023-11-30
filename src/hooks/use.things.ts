import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { ApiRepoThings } from '../services/api.repo.things';
import { useCallback, useMemo } from 'react';
import {
  addThingsTunk,
  loadThingsThunk,
  deleteThingsTunk,
} from '../slices/things.thunks';
import { Thing } from '../models/things.model';

export function useThings() {
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new ApiRepoThings(), []);

  const loadThings = useCallback(async () => {
    try {
      dispatch(loadThingsThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const addThing = async (thing: Partial<Thing>) => {
    try {
      dispatch(addThingsTunk({ repo, newThing: thing }));
    } catch (error) {}
  };

  const deleteThing = async (id: Thing['id']) => {
    try {
      dispatch(deleteThingsTunk({ id, repo }));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return { loadThings, addThing, deleteThing };
}
