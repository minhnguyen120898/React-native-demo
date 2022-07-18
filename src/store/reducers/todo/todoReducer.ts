
const initTodoState = {
    todos: []
}
const toDoReducer = (state = initTodoState, action) => {
    const type = action.type;
    switch(type) {
        case 'GET_TODOS': {
            return {
                ...state,
                todos: action.payload
            }
        }
        case 'TOGGLE': {
            return {
                ...state,
                todos: state.todos.filter(e => {
                    if (e.id === action.payload) {
                        e.completed = !e.completed;
                    }
                    return e
                }) 
            }
        }
        case 'DELETE': {
            return {
                ...state,
                todos: state.todos.filter(e => e.id !== action.payload)
            }
        }
        case 'ADD': {
            const maxId = state.todos.reduce((maxId, currentValue) => {
                return Math.max(maxId, currentValue.id)
            }, 0);

            const newItems = {
                id: maxId + 1,
                title: action.payload,
                isDone: false
            }
            
            return {
                ...state,
                todos: [...state.todos, newItems]
            }
        }
        default: {
            return state;
        }
    }
}

export default toDoReducer;