import { useContext } from 'react';
import { ErrorContext } from 'components/ErrorContext/ErrorContext';

const useAPIError = () => {
  const { error, addError, removeError } = useContext(ErrorContext);
  return { error, addError, removeError };
}

export default useAPIError;