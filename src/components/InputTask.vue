<template>
  <div class="home">
    hola
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Task from "../models/Task";

@Component
export default class InputTask extends Vue {
//   tasks = [] as Task[];
  setTaskComplete() {
    console.log("holaaa");
  }
  deleteTask() {
    console.log("holaaa");
  }
//   mounted() {
//     this.tasks = this.$store.state.tasks;
//     // console.log(tasks, "sirve");
//   }
}
</script>
<style lang="scss" scoped>
.home {
  margin-top: 2rem;
  h4 {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 2rem 0;
  }
  tbody {
    background-color: #8080800d;
  }
  thead {
    background-color: #0000002e;
  }
  th {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #0b0a0a;
  }
}
</style>
<!-- onsole.log(tasks, "sirve");
  }
}
</script> -->

