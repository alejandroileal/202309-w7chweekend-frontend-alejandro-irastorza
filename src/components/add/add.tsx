import { SyntheticEvent } from 'react';
import { Thing } from '../../models/things.model';
import { useThings } from '../../hooks/use.things';

export function Add() {
  const { addThing } = useThings();

  const handleSubmit = (event: SyntheticEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();

    const newThing: Partial<Thing> = {
      thing: (form.elements.namedItem('thing') as HTMLInputElement).value,
    };
    addThing(newThing);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Add a thing</legend>
      <input
        type="text"
        name="thing"
        placeholder="Describe one thing you've learned today..."
      />
      <button type="submit">DONE</button>
    </form>
  );
}
