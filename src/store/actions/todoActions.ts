import axios from "axios"


export const toggleID = (id) => {
    return {
        type: 'TOGGLE',
        payload: id
    }
}

export const deleteById = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}

export const addNewTodoAction = (title) => {
    return {
        type: 'ADD',
        payload: title
    }
}

export const getTodos = async (dispatch) => {
    // call api
    try {
        const responsive = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos?_limit=10');
        dispatch({
            type: 'GET_TODOS',
            payload: responsive['data']
        })
    } catch (error) {
        console.log(error)
        // handle fail request
        // dispatch action...
    }    
}