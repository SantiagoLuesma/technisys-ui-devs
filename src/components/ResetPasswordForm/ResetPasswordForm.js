import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import InputForm from '../InputForm/InputForm';
import './_ResetPasswordForm.scss';

const ResetPasswordForm = () => {

  const initialValues = {
    dniType: 'dni',
    dniNumber: ''
  };

  const {
    form,
    error,
    handleChange,
    handleSelect,
    handleSubmit}
  = useForm(initialValues);

  const options = [
    { value: 'dni', label: 'DNI', selected: true },
    { value: 'ci', label: 'C.I.' },
    { value: 'pasaporte', label: 'Pasaporte' }
  ]

  return (

    <div className='reset-password animate__animated animate__fadeIn'>
      <form onSubmit={ handleSubmit }>
        <legend>Olvidé mi contraseña</legend>
        <InputForm
          ariaLabel="Seleccione el tipo de documento."
          dataRequired={ true }
          label='Tipo de documento'
          name='dniType'
          onchange={ handleSelect }
          options={ options }
          type='select'
          value={form.dniType}
        />
        <InputForm
          ariaLabel='En este campo ingrese su número de documento.'
          dataRequired={ true }
          error={ error.dniNumber }
          label='Número de documento'
          name='dniNumber'
          onchange={ handleChange }
          placeholder='Ingresá tu número de documento'
          type='number'
          value={form.dniNumber}
        />
        <div className='reset-password__buttons'>
          <Link to="/">
            <Button value='Volver' theme='alt'/>
          </Link>
          <Button value='Continuar'/>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
