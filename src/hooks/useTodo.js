import React, { useCallback, useEffect, useReducer } from 'react'
import { todoReducer } from '../todoReducer'

const init = () => {
  return JSON.parse( localStorage.getItem('todo') ) || []  
}

const useTodo = props => {
    // Primer parametro nuestro reducer, luego el estado inicial y finalemnte una función incializaro en el caso de un proceso pesado
    const [todo, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        dispatch( localStorage.setItem('todo', JSON.stringify(todo)) )
      }, [todo])  

    const handleCheck = (id) => {
        dispatch({
          type: 'check',
          payload:  id
        })
    }
  
    const handleDelete = (id) => {
      dispatch({
        type: 'delete',
        payload: id
      })
    }

  return {
    todo, 
    dispatch,
    handleCheck,
    handleDelete,
  }
}

export default useTodo