<template>
  <header v-if="checksAll.length" class="head">
    <span class="title">Todo List Vuex, Typescript</span>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {

  get checksAll() {
    return  this.$store.getters.tasks
  }
}
</script>
<style lang="scss" scoped>
header {
  box-sizing: border-box;
  background-color: rgb(33, 11, 230);
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 1rem;

  .title {
    align-self: center;
    color: rgba(255, 255, 255);
    flex-direction: column;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 1rem;
  }
}
</style>