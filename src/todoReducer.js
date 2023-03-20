export const todoReducer = (state = [], action = {}) => {

    if(action.type === 'add'){
        return [...state, action.payload];
    }
    if(action.type === 'check'){
        return state.map( todo => {
            if( todo.id === action.payload ){
                return {
                    ...todo,
                    ['done']: !todo.done
                }
            }
            return todo;
        } ) ;
    }
    if(action.type === 'delete'){
        return state.filter( todo => todo.id != action.payload )
    }
    if(action.type === 'todo-check'){
        return state;
    }
    return state;

}