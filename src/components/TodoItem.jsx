import React from 'react'
const TodoItem = ({todo={}, description='', done=false, dispatch, setModal, handleCheck, handleDelete}) => {

  const handleModal = (todo) => {
    setModal({
      ...todo
    })
  }

  return (
    <li className='list-group-item d-flex justify-content-between '>
      <span className='text-break'>{description}</span>
      <div>
        { !todo.done ?   <button 
          className='btn btn-outline-success me-2'
          onClick={ () => handleCheck(todo.id) }
        >
        <span className="material-symbols-outlined">check</span>
        </button> : '' }

        <button 
          className='btn btn-outline-danger me-2'
          onClick={ () =>  handleDelete(todo.id) }
        > 
        <span className="material-symbols-outlined">delete</span>
        </button>
        <button 
          className='btn btn-outline-primary me-2'
          onClick={ () => handleModal(todo) }
          data-bs-toggle="modal" 
          data-bs-target="#exampleModal"
        > 
          <span className="material-symbols-outlined">fullscreen</span>
        </button>
      </div>
    </li>
  )
}



export default TodoItem