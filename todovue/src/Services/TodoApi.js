import {apiTodo} from './TodoServece';



export default {
    todoAll:() =>{
        return apiTodo.get('/All')
    },
    todoAdd:(todo) =>{
        return apiTodo.post('/AddTodo',todo)
    },
    todoEdit:(id,todo) =>{
        return apiTodo.put(`/EditTodo/${id}`,todo)
    },
    todoDel:(id) =>{
        return apiTodo.delete(`/EditTodo/${id}`)
    
    }
}