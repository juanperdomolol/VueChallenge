<template>
  <div class="list-tasks">
    <span v-if="!filtersTask.length" class="empty-tasks">No task yet.</span>
    <div v-else class="exists-tasks">
    <div class="checks">
    <p>Check all todos</p>
    <input type="checkbox" :checked="!checksAll" :disabled="!checksAll" @change="changeItemStatus"/>
    </div>
      <TaskItem 
        v-for="task in filtersTask" 
        :key="task._id" 
        :task="task"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Task from "../../models/Task";
import TaskItem from "../shared/TaskItem/TaskItem.vue";

@Component({
  components: {
    TaskItem,
  },
})
export default class ListTask extends Vue {
  
  get filtersTask(): Task[] {
    const options: any = {
        all: () => this.$store.getters.tasks,
        active: () => this.$store.getters.tasks.filter(( task: Task ) => !task.completed),
        completed: () => this.$store.getters.tasks.filter((task: Task) => task.completed),
      };
      return options[this.$store.state.filter]() || this.$store.getters.tasks;
  }
  changeItemStatus(){
    this.$store.dispatch("allChecks", this.filtersTask)
  }
  get checksAll() {
    return  this.$store.getters.tasks.filter(( task: Task ) => !task.completed).length

  }
}
</script>
<style lang="scss" scoped>
.list-tasks {
    max-height: 300px;
    min-height: 300px;
    padding-left: 2.7rem;
    padding-right: 2.7rem;
    overflow: hidden;
    overflow-y: auto;

  .empty-tasks {
    text-align: center;
    display: block;
    font-size: 18px;
    color: #334756;
    font-weight: 700;
    padding: 25px;
    user-select: none;
  }
  .checks {
    display: inline-flex;
    align-content: stretch;
    justify-content: center;
    align-items: center;
  }

 
}
</style>


