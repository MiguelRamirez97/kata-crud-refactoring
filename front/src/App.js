import React, { useContext, useReducer, useEffect, useRef, useState, createContext } from 'react';
import { FormItem } from './Form/FormItem';
import { FormList } from './Form/FormList';
import {List} from './List/List';
import {StoreProvider} from './Provider/StoreProvider';

function App() {
  return ( 
    <StoreProvider>
      <h3>List</h3>
      <FormItem />
      <List />
    </StoreProvider>
  );
}

export default App;
