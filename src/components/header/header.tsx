import { UserButtons } from '../user.buttons/user.buttons';
import { header } from './header.module.scss';

export function Header() {
  return (
    <header className={header}>
      <h1>KittyBook</h1>
      <UserButtons></UserButtons>
    </header>
  );
}
