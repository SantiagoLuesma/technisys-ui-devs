import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import Loader from '../Loader/Loader';
import Logo from '../Logo/Logo';
import './_Container.scss';
import Illustration from '../../assets/illustration.png'
import AppRouter from '../../routers/AppRouter';

const Container = () => {

  const [ loader ] = useContext( AppContext );

  return(
    <div className='main-container'>
      { loader && <Loader /> }
      <div className='container'>
        <div className='container__content'>
          <Logo />
          <AppRouter />
        </div>
        <figure className='container__image'>
          <img src={ Illustration } alt='TEKBNK' />
        </figure>
      </div>
    </div>
  );
};

export default Container;
