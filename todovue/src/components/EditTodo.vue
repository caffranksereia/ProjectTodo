<template>
  <div class="EditTodo">
      <h1>Editar todo</h1>
        <form>
            <label>titulo</label>
            <input type="text">
            <label>Todo</label>
            <input type="text">
            <label>Done</label>
            <input type="checkbox" name="" id="">
            <button @click="Edit()">Update</button>
            <button>Cancel</button>


        </form>
        
  </div>
</template>

<script>
// @ is an alias to /src
//import TodoApi from '@/Services/TodoApi'

export default {
  name: 'EditTOdo',
    props: {
        titulo:String,
        todo:String,
        donneTodo:Boolean
  },
  data(){

  },
  methods:{
    Edit(){
      alert('Editar')
    }
  }
}
</script>
<style scoped>

</style>