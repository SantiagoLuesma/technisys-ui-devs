import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import InputForm from '../InputForm/InputForm';
import './_LoginForm.scss';
import 'animate.css';

const LoginForm = () => {

  const initialValues = {
    user: '',
    password: ''
  };

  const {
    form,
    error,
    response,
    handleChange,
    handleSubmit
  }
  = useForm(initialValues);

  const { user, password } = form;


  return (
    <div className='login animate__animated animate__fadeIn'>
      <form onSubmit={ handleSubmit } >
        <legend>Iniciá sesión</legend>
        { response && <ErrorMessage message='El nombre de usuario o la contraseña son incorrectos' type='form' /> }
        <InputForm
          ariaLabel='En este campo ingrese su nombre de usuario.'
          autocomplete="username"
          dataRequired= { true }
          error= { error.user }
          label='Usuario'
          name='user'
          onchange= { handleChange }
          placeholder='Ingresá tu usuario'
          type='text'
          value= { user }
        />
        <InputForm
          ariaLabel='En este campo ingrese su contraseña.'
          autocomplete="password"
          dataRequired= { true }
          error= { error.password }
          label='Contraseña'
          name='password'
          onchange = { handleChange }
          placeholder='Ingresá tu contraseña'
          type='password'
          value= { password }
        />
        <Button
          ariaLabel='Pulse este botón para iniciar sesión'
          value='Ingresar'
        />
      </form>
      <Link
        aria-label='Pulse este botón si no recuerda su contraseña y quiere recuperarla'
        to='/reset-password'
      >Olvidé mi contraseña</Link>
    </div>
  );
};

export default LoginForm;
