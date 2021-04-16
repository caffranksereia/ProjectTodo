<template>
  <div class="TodoAdd">
        <form>
            <label>titulo</label>
            <input type="text">
            <label>Todo</label>
            <input type="text">
            <button @click="add()">Salvar</button>
        </form>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoApi from '@/Services/TodoApi'

export default {
  name: 'AddTodo',
    props: {
        titulo:String,
        todo:String,
        donneTodo:Boolean
  },
  data(){
    return{
      todos:{
        titulo:"",
        todo:"",
        donneTodo:"",
        
      }
    }

  },
  methods:{
    Add(){
      const data = {
        TiTulo: this.todos.TiTulo,
        Todo: this.todos.Todo,
        doneTodo: this.todos.doneTodo
      }
      TodoApi.todoAdd(data)
    }
  }
}
</script>
<style scoped>

</style>