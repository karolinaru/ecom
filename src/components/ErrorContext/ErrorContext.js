import React, {createContext, useState, useCallback} from 'react';

export const ErrorContext = createContext({
    error: null,
    addError: () => {},
    removeError: () => {}
});

const ErrorProvider = ({children}) => {
    const [error, setError] = useState(null);
    
    const removeError = () => setError(null);
    
    const addError = (message, status) => setError({ message, status });
    
    const contextValue = {
        error,
        addError: useCallback((message, status) => addError(message, status), []),
        removeError: useCallback(() => removeError(), [])
    };
    
    return (
        <ErrorContext.Provider value={contextValue}>
            {children}
        </ErrorContext.Provider>
        )
    }

export default ErrorProvider;