<template>
  <div class="TodoDel">
        <h1>Delete Todo</h1>
        <form>
            <label>titulo</label>
            <input type="text">
            <label>Todo</label>
            <input type="text">
            <label>Done</label>
            <input type="checkbox" name="" id="">
            <button @click="del()">Delete</button>
            <button>Cancel</button>


        </form>
  </div>
</template>

<script>
// @ is an alias to /src
//import TodoApi from '@/Services/TodoApi'

export default {
  name: 'DeleteTodo',
  props: {
    titulo:String,
    todo:String,
    donneTodo:Boolean
  },
  methods:{
    del(){
      alert('Del')
    }
  }
}
</script>
<style scoped>

</style>