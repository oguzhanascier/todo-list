<template>
  <div class="toDoList">
    <input
      type="text"
      class="addItem"
      v-model="task"
      @keydown.enter="todoText"
    />
    <div class="item" v-for="(item, index) in toDoList" :key="index">
      <div class="checkText" @click="item.isCompleted== !item.isCompleted">
        <input :checked="item.isCompleted" type="checkbox" />
        <ul>
          <li :id="item.id" :class="{ compluted: item.isCompleted }" >
            {{ item.text }} {{ item.id }} {{ item.isCompleted }}
          </li>
        </ul>
      </div>
      <i class="fa-solid fa-trash-can" @click="deleteItem(index)"></i>
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
      ],
    };
  },
  methods: {
    todoText() {
      let randomNumber =
        Math.floor(Math.random() * 1000) +
        "efoK" +
        Math.floor(Math.random() * 1000);
      this.toDoList.push({
        id: randomNumber,
        text: this.task,
        isCompleted: false,
      });
      this.task = "";
    },
    deleteItem(index, task) {
      this.toDoList.splice(index, 1);
    },
    checkedBox(index) {
      this.isCompleted == true;
    },
  },
  computed: {
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
  height: 65%;
  background: #f4f4f4;
  box-shadow: 2px 12px 29px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 12px 29px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 12px 29px -8px rgba(0, 0, 0, 0.75);
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
</style>
