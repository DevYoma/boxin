import React, { createContext, useContext, useReducer } from 'react'

// DATA LAYER
export const StateContext = createContext();

// BUILDING THE PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// how we use it in other components
export const useStateValue = () => useContext(StateContext)