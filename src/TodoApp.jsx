import React, { useEffect, useReducer, useState } from 'react'
  import TodoList from './components/TodoList'
import TodoSubmit from './components/TodoSubmit'
import { todoReducer } from './todoReducer'
import useTodo from './hooks/useTodo';

const TodoApp = () => {
    const {todo, dispatch, handleCheck, handleDelete} = useTodo();
    const [modal, setmodal] = useState({description: '', done: false, start: '', fecha: ''})

    return (
        <>
            <div className='container text-center'>

                <h2 className='text-3xl uppercase'>Notas</h2>
                <hr />
                <div className='row justify-content-between '>
                    <div className='col-lg-7 col-12'>
                    <TodoList todo={todo} dispatch={dispatch} setModal={setmodal} handleCheck={handleCheck} handleDelete={handleDelete}/>
                    </div>
                    <div className='col-lg-5 col-12'>
                        <h4>Nueva Nota</h4>
                        <hr />
                        <TodoSubmit dispatch={dispatch} />
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Descripción de la Nota</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <span> {modal.description} </span>
                            <hr />
                            <span className='text-primary'> {modal.start} </span>
                            <hr />
                            <span className='text-warning'> {modal.fecha} </span>
                            <hr />
                            <span className={modal.done ? 'text-success' : 'text-danger'} > {modal.done ? 'REALIZADO' : 'FALTANTE'} </span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TodoApp