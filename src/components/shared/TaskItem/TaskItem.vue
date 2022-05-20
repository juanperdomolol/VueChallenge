<template>
  <div class="task">
    <input type="checkbox" :checked="task.completed" @change="changeItemStatus" :disabled="task.completed"/>
    <p v-if="!editing" @dblclick="CanEdit" :class="{done: task.completed}">
      {{ task.name }}
    </p>
    <input
      v-if="editing"
      :value="task.name"
      @keyup.enter="editItem"
      @keyup.esc="cancelEdit"
      @blur="cancelEdit"
    />
    <div class="actions"  @click="RemoveTask">
      <svg class="svg-icon" viewBox="0 0 20 20">
        <path
          d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Task from "@/models/Task";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TaskItem extends Vue {
  @Prop({ required: true, type: Object }) task: Task | undefined;
  editing = false;
  editItem(event: { target: HTMLInputElement }): void {
    const value = event.target.value;
    if (!value){
      this.RemoveTask()
    } else {
      const { task } = this;
      this.$store.dispatch("editItem", { task, value });
      this.editing = false;
    }
  }
  cancelEdit(event: { target: HTMLInputElement }) {
    event.target.value = this.task!.name;
    this.editing = false;
  }
  RemoveTask() {
    this.$store.dispatch("deleteItem", this.task);
  }
  changeItemStatus(){
    this.$store.dispatch("toggleItem", this.task)
  }
  CanEdit(){
    if (!this.task!.completed) this.editing = true
  }
}
</script>

<style lang="scss" scoped>
.done {
	color: #d9d9d9;
	text-decoration: line-through;
  }
.task {
  position: relative;
  width: 100%;
  padding: 0 0.5rem;
  border-bottom: 2px solid #ccc;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;

  &.finished {
    text-decoration: line-through;
  }

  &:hover {
    background-color: #f2f1f1;
    transition: 0.3s;
  }

  .actions {
    align-items: center;
    background-color: red;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    position: absolute;
    height: 100%;
    justify-content: space-between;
    right: -8%;
    top: 0;
    width: 8%;
    transition: 0.3s;

    svg {
      width: 70%;
      height: 100%;
      text-align: center;
      line-height: 45px;
      transition: 0.3s;

      &:hover {
        font-size: 19px;
      }
    }

    .deleteBtn {
      background-color: #ff2442;
      color: #fff;
    }
  }

  &:hover .actions {
    right: 0;
  }

  p {
    max-width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>