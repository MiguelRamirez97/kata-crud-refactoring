import React, { useContext, useReducer, useEffect, useRef, useState, createContext } from 'react';
import List from './List/List';
import Form from './Form/Form';
import { reducer } from './Reducer/Reducer';

export const HOST_API = "http://localhost:8080/api";
const initialState = {
  todo: { list: [], item: {} }
};
export const Store = createContext(initialState) //Consumer, provider, store hace la funcion de ambos


const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>
    {children}
  </Store.Provider>

}

function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}

export default App;
