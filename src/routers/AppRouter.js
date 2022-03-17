import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from '../views/LoginScreen';
import ResetPasswordScreen from '../views/ResetPasswordScreen';


const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginScreen /> } />
        <Route path='reset-password' element={ <ResetPasswordScreen /> } />
        <Route path='*' element={ <LoginScreen /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
