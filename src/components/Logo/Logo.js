import './_Logo.scss';
import LogoTEK from '../../assets/isotipo_tekbnk.png'

const Logo = () => {
  return(
    <div className='logo'>
      <img src={LogoTEK} alt='Logo de TEKBNK' />
      <p>TEK<span>BNK</span></p>
    </div>
  );
};

export default Logo;
