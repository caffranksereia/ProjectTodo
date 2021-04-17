<template>
  <div class="home">
    <Todo msg="Welcome to Your Todo"/>
    <ListTodo/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from '@/components/Todo.vue'
import ListTodo from '@/components/ListTodo.vue'
export default {
  name: 'Home',
  components: {
    Todo,
    ListTodo
   
  }
}
</script>
