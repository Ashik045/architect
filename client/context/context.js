/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useReducer } from 'react';
import Reducer from './reducer';

const isServer = typeof window !== 'undefined';

const INITIAL_STATE = {
    user: isServer && JSON.parse(localStorage.getItem('user') || null),
    isFetching: false,
    isError: false,
};

export const Context = React.createContext(INITIAL_STATE);

export function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                isError: state.isError,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    );
}
