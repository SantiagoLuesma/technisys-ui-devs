import './_ErrorMessage.scss';
import WarningIcon from '../../assets/warning-icon.png';

const ErrorMessage = ({ message, type }) => {

  return (
    <div className={ `error-message ${ type && `error-message__${ type }` }` }>
      <img src={ WarningIcon } alt='Alerta de error' />
      <p>{ message }</p>
    </div>
  );
};

export default ErrorMessage;
