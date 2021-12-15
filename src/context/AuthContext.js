import React, {createContext, useState} from 'react';

export const AuthContext = createContext({
    auth: undefined,
    signIn: () => {},
    signOut: () => {},
});

export function AuthProvider(props) {
    const { children } = props;
    const [auth, setAuth] = useState(undefined);

    const signIn = (userData) => {
        setAuth(userData);
    };

    const signOut = () => {
        setAuth(undefined);
    };

    const valueContext = {
        auth,
        signIn,
        signOut,
    };

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    );
}