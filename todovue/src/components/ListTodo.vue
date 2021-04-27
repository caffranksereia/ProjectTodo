<template>
  <div class="listTodo">
    <AddTodo />
    <ul v-for="todos of listtodos" :key="todos.id">
      <CardTodo  v-for="todos of listtodos" :key="todos.id" :todoCard ="listttodos"/>
        <li> {{todos.Titulo}} </li>
        <li>{{todos.Todo}}</li>
        <li>{{todos.doneTodo}}</li>
        <label>feito</label>
        <input type="checkbox" name="feito" id="">
        <div class="btn">
          <button @click="Editar()">Editar</button>
        <button @click="Delete()">Delete</button>
        </div>
    </ul>
    <button @click="Editar()">Editar</button>
    <button @click="Delete()">Delete</button>
    <EditTodo v-if="!isEdit" />
    <DeleteTodo v-if="!isDele"/>
  </div>
</template>

<script>
import TodoApi from '@/Services/TodoApi'

import EditTodo from '@/components/EditTodo.vue'
import DeleteTodo from '@/components/DeleteTodo.vue'
import AddTodo from '@/components/AddTodo'
import CardTodo from '@/components/CardTodo'
export default {
  name: 'ListTodo',
  
  components:{
    EditTodo,
    DeleteTodo,
    AddTodo,
    CardTodo
  },
  data(){
    return{
      todos:{
        id:"",
       Titulo:"",
       Todo:"",
       doneTodo:false
      },
     listtodos: [],
     isEdit:false,
     isDelete:false
    }
  },
  methods:{
    ListTodo(){
      TodoApi.todoAll().then(res =>{
        this.listtodos = res.data
      
      })
    },
    Editar(){
      alert('Editar')
    },
    Delete(){
      alert('delete')
    }
  },
  mounted(){
    this.ListTodo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
