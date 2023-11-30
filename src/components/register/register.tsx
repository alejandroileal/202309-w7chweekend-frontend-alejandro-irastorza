import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/use.users.hook';

type Params = {
  closeNodal: () => void;
};
export function Register({ closeNodal }: Params) {
  const [hasRegister, setHasRegister] = useState(false);
  const { register } = useUsers();

  const handleCloseOk = () => {
    setHasRegister(false);
    closeNodal();
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    register(formData);
    setHasRegister(true);
    setTimeout(() => {
      handleCloseOk();
    }, 2000);
  };
  return (
    <>
      <h2>Register</h2>
      {!hasRegister && (
        <form onSubmit={handleSubmit} className="register">
          <input type="text" name="kittyName" placeholder="Kitty name" />
          <input type="number" name="age" placeholder="Kitty age" />
          <input type="text" name="ownerName" placeholder="Owner name" />
          <input type="text" name="userName" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="file"
            name="profilePicture"
            placeholder="Profile picture"
          />
          <button type="submit">Registrar</button>
        </form>
      )}

      {hasRegister && (
        <div>
          <p>¡Registro correcto!</p>
          <button type="button" onClick={handleCloseOk}>
            Continuar
          </button>
        </div>
      )}
    </>
  );
}
