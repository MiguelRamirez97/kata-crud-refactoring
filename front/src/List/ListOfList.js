import React, { useContext, useReducer, useEffect, useRef, useState, createContext } from 'react';
import { FormItem } from '../Form/FormItem';
import { HOST_API }  from '../Host/Host';
import { Store } from '../Host/Host';
import { ListToDo } from './ListToDo';

export const ListOfList = () => {
    const { dispatch, state: { list } } = useContext(Store);
    const currentList = list.list;
  
    useEffect(() => { //se usa despues del renderizado
      fetch(HOST_API + "/todos")
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: "update-list", list })
        })
    }, [dispatch]);
  
  
    const onDelete = (id) => {
      fetch(HOST_API + "/" + id + "/todo", {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-list", id })
      })
    };
  

    return <div className="navbarh2">
      <table >
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          {currentList.map((list) => {
            return <tr key={list.id}>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td><button onClick={() => onDelete(list.id)}>Eliminar</button></td>
            <FormItem/>
            <ListToDo/>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  }