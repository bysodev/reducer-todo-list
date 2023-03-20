import React from 'react'
import { useForms } from '../hooks/useForms'

const TodoSubmit = ({dispatch}) => {

    const {id, description, done, fecha, handleChange, resetForms } = useForms({
        id: '',
        description: '',
        done: false,
        start: '',
        fecha: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        if(description.length === 0 || description.length > 45){
            return false;
        }
        if(fecha === ''){
            return false;
        }

        dispatch({
            type: 'add',
            payload: {
                id: new Date().getTime(),
                description,
                done: false,
                start: new Date().toISOString(),
                fecha
            }
        })
        resetForms();
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name='description'
            placeholder='¿Qué pretendes hacer?'
            className='form-control'
            onChange={handleChange}
            value={description}
        />
        <br />
        <input 
            type="datetime-local"
            name='fecha'
            placeholder='¿Qué pretendes hacer?'
            className='form-control'
            onChange={handleChange}
            value={fecha}
        />

        <hr />
        
        <button type='submit'
            className='btn btn-outline-primary mt-2'>
            Agregar
        </button>
    </form>
  )
}

export default TodoSubmit