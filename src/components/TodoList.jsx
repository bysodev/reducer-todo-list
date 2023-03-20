import React from 'react'
import TodoItem from './TodoItem'
const TodoList = ({todo=[], dispatch, setModal, handleCheck, handleDelete}) => {
  return (
    <>
      <h3>Notas pendientes: {todo.filter( nota => !nota?.done ).length }</h3>
      <ul className="list-group">
      {
          todo.filter(note => !note?.done).map((tod) => (
              <TodoItem key={tod?.id} todo={tod} description={tod?.description} done={tod?.done} dispatch={dispatch} setModal={setModal} handleDelete={handleDelete} handleCheck={handleCheck}/>
          ))
      }
      </ul>
      <h3>Notas realizadas: {todo.filter( nota => nota?.done ).length }</h3>
      <ul className="list-group">
      {
          todo.filter(note => note?.done).map((tod) => (
              <TodoItem key={tod?.id} todo={tod} description={tod?.description} done={tod?.done} dispatch={dispatch} setModal={setModal} handleDelete={handleDelete} handleCheck={handleCheck}/>
          ))
      }
      </ul>
    </>
  )
}

export default TodoList