// import { AppRoutes } from '../app.routes/app.routes';
import { useEffect } from 'react';
import { Header } from '../header/header';
import { useUsers } from '../../hooks/use.users.hook';

function App() {
  const { loginWithToken } = useUsers();
  useEffect(() => {
    loginWithToken();
  }, []);

  return <Header></Header>;
}

export default App;
