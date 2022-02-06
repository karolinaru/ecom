import useAPIError from 'components/UseAPIError/UseAPIError';
import React from 'react';
import './ErrorMessage.scss';

const ErrorMessage = () => {
  
  const {error} = useAPIError();
  
  return (
    <div className='error-msg'>
      {error && error.message && <p>({error.message})</p>}
    </div>
    )
  }
  
export default ErrorMessage;
  