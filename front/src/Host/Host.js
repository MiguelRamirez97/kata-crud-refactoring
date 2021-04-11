import React, {createContext} from 'react';

export const HOST_API = "http://localhost:8080/api";
export const initialState = {
  todo: { 
    list: [],
    item: {} },
  list: {
    list: [],
    item: {} }
};
export const Store = createContext(initialState) //Consumer, provider, store hace la funcion de ambos