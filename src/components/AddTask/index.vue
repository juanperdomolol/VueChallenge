<template>
 <div class="add-task">
    <input 
    v-model="taskName"
    type="text" 
    class="addTask" 
    placeholder="Add task..."
    autofocus
    v-on:keyup.enter="addTask"
  />
  </div>
</template>
<script lang="ts">
import {  Vue, Component } from "vue-property-decorator";
import Task from "../../models/Task";
import { uuid  } from "vue-uuid";

@Component
export default class AddTask extends Vue {
  taskName:string = "";
  
  addTask() {
    if (this.taskName !== "") {
      const _id = uuid.v4()
      const newTask = new Task(this.taskName, _id);
      this.$store.commit("addItem", newTask);
      this.taskName = "";
    }
  }
}
</script>
<style lang="scss" scoped>
.add-task {
    width: 100%;
    border: 1px solid #ccc;
    padding: 2%;
    display: block;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 2rem;

    input.addTask {
      width: 95%;
      padding: 15px 10px;
      border: none;
      background-color: #f6f6f6;
      outline: none;
      border-radius: 5px;
    }


  }
</style>
