import LoaderSVG from '../../assets/loading.gif'
import './_Loader.scss';


const Loader = () => {
  return (
    <div className='loader-container'>
      <img
        className='loader-container__icon'
        src={ LoaderSVG }
        alt='Cargando..'
      />
    </div>
  );
};

export default Loader;
