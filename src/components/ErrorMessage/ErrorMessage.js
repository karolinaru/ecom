import {ErrorContext} from 'components/ErrorContext/ErrorContext';
import React, {useContext} from 'react';

const ErrorMessage = () => {

  const {errors} = useContext(ErrorContext);
     
  return (
    <ul className='error-msg'>
      {errors.map(error => {
        return (
          <li key={error.id}>{error.message}</li>
        )
      })}
    </ul>
  )
}
  
export default ErrorMessage;
  