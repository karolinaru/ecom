import React, {createContext, useState} from "react";

export const ErrorContext = createContext();

const ErrorProvider = ({children}) => {
    const [errors, setErrors] = useState([]);

    //jak tutaj złapać te errory do setErrors?

    return (
        <ErrorContext.Provider value={{errors}}>
            {children}
        </ErrorContext.Provider>
    )
}

export default ErrorProvider;