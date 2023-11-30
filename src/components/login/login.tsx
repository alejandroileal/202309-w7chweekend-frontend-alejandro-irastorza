import { SyntheticEvent } from 'react';
import { useUsers } from '../../hooks/use.users.hook';

type Props = {
  closeModal: () => void;
};
export function Login({ closeModal }: Props) {
  const { login } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement; // Le dice a Ts que es un formulario
    const formData = new FormData(formElement);
    const loginUser = {
      userName: formData.get('userName')?.toString() as string,
      password: formData.get('password')?.toString() as string,
    };

    console.log(loginUser);
    login(loginUser);
    closeModal();
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Example: kitty@kittybook.com"
          name="userName"
        />
        <input type="password" placeholder="Password" name="password" id="" />
        <button type="submit">Login</button>
        <button type="button" onClick={closeModal}>
          Cancelar
        </button>
      </form>
    </>
  );
}
