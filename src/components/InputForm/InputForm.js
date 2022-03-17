import { useState } from 'react';
import Select from 'react-select';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './_InputForm.scss';
import PasswordEye from '../../assets/pass-eye.png'

const InputForm = ({
  ariaLabel,
  autocomplete,
  name,
  label,
  type,
  placeholder,
  options,
  onchange,
  value,
  error,
  dataRequired
}) => {

  const [ showPassword, setShowPassword ] = useState( false );

  const types = [ 'text', 'password', 'number' ];

  const customStyles = {
    menu: () => ({ }),
    option: () => ({ }),
    control: () => ({ }),
    singleValue: () => ({ }),
  }

  const handleClick = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  }

  return (
    <div className='input'>
      <label className='input__label' htmlFor={ name } data-required={ dataRequired }> { label } </label>
      {
        (types.includes(type)) &&
          <div className='input__container'>
            <input
              className={ `input__input ${ error && 'input__error' }` }
              type={ ( type === 'password' && showPassword ) ? 'text' : type }
              name={ name }
              id={ name }
              aria-label={ariaLabel}
              autoComplete={autocomplete}
              placeholder={ placeholder }
              onChange={ onchange }
              value={ value }
            />
            {
              type === 'password' &&
                <button
                  className='input__pass-icon'
                  onClick={ handleClick }
                >
                  <img src={ PasswordEye } alt='Icono de ojo' />
                </button>
            }
          </div>
      }

      {
        type === 'select' &&
          <Select
            className='input__select'
            classNamePrefix='input__select'
            name={ name }
            id={ name }
            options={ options }
            styles={ customStyles }
            isSearchable={ false }
            defaultValue={ options.find(option => option.selected) }
            onChange={ onchange }
          />

      }

      {
        error && <ErrorMessage message={ error } type='input' />
      }

    </div>);
};

export default InputForm;
