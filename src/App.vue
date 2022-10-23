<template>
  <div class="container">
    <div class="toDoContainer">
      <TodoList></TodoList>
    </div>
  </div>
</template>

<script>
import AddItem from './components/AddItem.vue'
import TodoList from './components/TodoList.vue'
export default {
components:{
  TodoList,
  AddItem
}

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');


body {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: inherit;
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
 
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
 
}




</style>
