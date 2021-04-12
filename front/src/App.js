import React, { useContext, useReducer, useEffect, useRef, useState, createContext } from 'react';
import { FormItem } from './Form/FormItem';
import { FormList } from './Form/FormList';
import { ListOfList } from './List/ListOfList';
import {ListToDo} from './List/ListToDo';
import {StoreProvider} from './Provider/StoreProvider';

function App() {
  return ( 
    <StoreProvider>
      <h3>List</h3>
      <FormList />
      <ListOfList/>
    </StoreProvider>
  );
}

export default App;
