import axios from 'axios'


export const apiTodo = axios.create({
    baseURL:'http://localhost:3000/'
})