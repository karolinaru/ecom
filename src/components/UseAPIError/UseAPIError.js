import { useContext } from 'react';
import { ErrorContext } from 'components/ErrorContext/ErrorContext';

const UseAPIError = () => {
  const { error, addError, removeError } = useContext(ErrorContext);
  return { error, addError, removeError };
}

export default UseAPIError;