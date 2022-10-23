<template>
  <div class="toDoList">
    <input
      type="text"
      class="addItem"
      v-model="task"
      @keydown.enter="todoText"
      placeholder="Write a task..."
      ref="inputFocus"
    />
    <div class="item" v-for="(item, index) in toDoList" :key="index">
      <div class="checkText">
        <!-- <input  @click="completed(item)" type="checkbox" /> -->
        <i class="fa-regular fa-circle" @click="completed(index, item)" :class="{ circleBg: item.isCompleted }"></i>
        <ul>
          <li :id="item.id" :class="{ compluted: item.isCompleted }">
            {{ item.text }} 
          </li>
        </ul>
      </div>
      <i class="fa-solid fa-trash-can" @click="deleteItem(index, task)"></i>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      task: "",
      toDoList: [
        { id: 3, text: "Keşkül", isCompleted: true },
        { id: 4, text: "Erik", isCompleted: false },
        { id: 5, text: "Zargana", isCompleted: true },
        { id: 6, text: "Şişko Ronaldo", isCompleted: false },
      ],
    };
  },

  methods: {
    todoText() {
      // random ID
      let randomNumber =
        Math.floor(Math.random() * 1000) +
        "efoK" +
        Math.floor(Math.random() * 1000);
      // new item
      this.toDoList.push({
        id: randomNumber,
        text: this.task,
        isCompleted: false,
      });
      this.task = "";
    },

    /**********/
    deleteItem(index,task) {
   // Removing the item from the array.
      this.toDoList.splice(index, 1);
     // Focusing the input element.
      this.$refs.inputFocus.focus()
    },

    // completed
    completed(item) {
      item.isCompleted = !item.isCompleted;
    },
  },
  computed: {
    // line-through
    className() {
      let classes;
      if (this.toDoList.isCompleted == true) {
        classes.push("complete");
      }

      return classes;
    },
  },
};
</script>

<style>

.toDoContainer {
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 340px;
  min-height: 440px   ;
  background: #f4f4f4;
  filter: drop-shadow(3mm 4.5mm 5mm rgba(0, 0, 0, 0.377));
}

.toDoList {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
}

.item {
  display: flex;
  justify-content: space-between;

  color: #413f3f;
  font-size: 15px;
  width: 100%;
  font-weight: 400;
  line-height: 18px;
  margin: 16px 35px 0 35px;
}
.checkText {
  display: flex;
}

ul {
  display: block;
  margin: 0 10px;
  padding: 0;
}

li {
  list-style: none;
  padding: 0;
}

.fa-trash-can {
  opacity: 0.7;
  color: #ff9292;
  display: none;
}

.item:hover .fa-trash-can {
  cursor: pointer;
  display: block;
  transition: all 0.5s ease-in-out;
}

.addItem {
  width: 340px;
  height: 47px;
  padding: 0px 15px;
  border: none;
  border-radius: 15px;
  margin-top: 20px;
  outline-color: #333;
}

.compluted {
  text-decoration: line-through;
}
.item .compluted {
  color: rgba(86, 86, 86, 0.306);
}
.circleBg{
  height: 15px;
  width: 15px;
  background-color: #333;
  border: none;
  border-radius: 50%;
}
</style>
