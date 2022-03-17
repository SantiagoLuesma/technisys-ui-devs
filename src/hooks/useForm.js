import { useContext, useState } from 'react';
import { AppContext } from '../context/appContext';
import { formValidation } from '../utils/formValidation';

export const useForm = (initialValues) => {

  const [ loader, setLoader ] = useContext(AppContext);

  const [form, setForm] = useState( initialValues );
  const [error, setError] = useState( {} );
  const [response, setResponse] = useState(null);


  const handleChange = ({target}) => {
    const {name, value} = target;

    setForm({
      ...form,
      [ name ]: value
    })
  };

  const handleSelect = (values) => {
    const { value } = values;

    setForm({
      ...form,
      dniType: value
    })
  }

  const handleSubmit = ( e ) => {

    e.preventDefault();

    const errors = formValidation( form );

    setError( errors );

    if(errors.validations){
      setLoader( true );

      setTimeout(() => {
        setLoader( false );
        setResponse({
          error: 'El nombre de usuario o la contraseña son incorrectos'
        })
      }, 1500);
    }
  };

  return {
    form,
    error,
    loader,
    response,
    handleChange,
    handleSelect,
    handleSubmit,
  }

};
