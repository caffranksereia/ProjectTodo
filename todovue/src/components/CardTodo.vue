<template>
  <div class="listTodo">
    <div class="todoTitulo">
      <h1 id="titulo">{{ todoCard.Titulo }}</h1>
    </div>
      <div class="cardTodo">
        <div class="cardBody">
          <div class="bodyTodo">
            <p>{{ todoCard.Todo }}</p>
          </div>
          <p>{{ todoCard.doneTodo }}</p>
          <input type="checkbox" >
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardTodo',
  props:{
    todoCard: {
    required:true,
    type: Object
    }
  }
  
  

  

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listTodo{
  width:100%;
  height:200px;
}
.todoTitulo{
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
}
#titulo{
  font-family: 'Courier New', Courier, monospace;
  color:black;
}
.cardTodo{
  display: flex;
  width:500px;
  height:100px;
  margin-left: 25%;
  justify-content: center;

}
.cardBody{
  display: flex;
  width: 100%;
  height: 70%;
  margin-top: 15px;
  margin-left: 2px;
  margin-right: 2px;
  justify-content: center;
}
.bodyTodo{
  width: 100%;
  margin-top: 2px;
}

</style>
