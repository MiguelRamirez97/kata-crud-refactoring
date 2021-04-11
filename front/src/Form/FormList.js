import React, { useContext, useReducer, useEffect, useRef, useState, createContext } from 'react';
import { HOST_API } from '../App';
import { Store } from '../App';

export const FormList = () => {
    const formRef = useRef(null); //valor que se puede cambiar
    const {dispatch, state: {list}} = useContext(Store);
    const listItem = list.item;
    const [state, setState] = useState(listItem); //tengo un valor inicial y lo puedo cambiar

    useEffect(() => { //se usa despues del renderizado
        fetch(HOST_API + "/todos")
          .then(response => response.json())
          .then((list) => {
            dispatch({ type: "update-list", list })
          })
      }, [dispatch]);
  
    const onAdd = (event) => {
      event.preventDefault();
  
      const request = {
        name: state.name,
        id: null,
      };
  
  
      fetch(HOST_API + "/todo", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: "add-list", item: list });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  
    return <form ref={formRef}>
    <input
      type="text"
      name="name"
      placeholder="¿Tienes una nueva lista?"
      onChange={(event) => {
        setState({ name: event.target.value });
      }}></input>
    <button onClick={onAdd}>Añadir nueva lista</button>
  </form>;
  }
  export default FormList;