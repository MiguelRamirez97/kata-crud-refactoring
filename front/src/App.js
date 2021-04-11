import React, { useContext, useReducer, useEffect, useRef, useState, createContext } from 'react';
//import List from './List/List';
import { FormList } from './Form/FormList';
import { FormItem } from './Form/FormItem';
import List from './List/List';
import { reducer } from './Reducer/Reducer';

export const HOST_API = "http://localhost:8080/api";
export const initialState = {
  todo: { 
    list: [],
    item: {} 
  }
};
export const Store = createContext(initialState) //Consumer, provider, store hace la funcion de ambos


export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>
    {children}
  </Store.Provider>

}

function App() {
  return ( 
    <StoreProvider>
      <h3>List</h3>
      <FormItem />
      <List  />
    </StoreProvider>
  );
}

export default App;
