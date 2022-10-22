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
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  font-family: inherit;
  background-color: #e5e5e5;
}




</style>
