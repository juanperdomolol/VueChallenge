<template>
    <footer v-if="checksAll.length" class="footer">
    <span class="title">Made 💻 by Juan <b>Valentin</b>  Perdomo Bonilla 👷‍♂️</span>
    </footer>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {

  get checksAll() {
    return  this.$store.getters.tasks
  }
}
</script>
<style lang="scss" scoped>
footer{
  box-sizing: border-box;
  position: fixed;
  display: flex;
  background-color: rgba(16, 97, 190, 0.933);
  bottom: 10px;
  left: 10px;
  right: 10px;
  margin-bottom: 0px;
  padding: 1rem;

}
 .title {
    align-self: center;
    color: rgba(255, 255, 255);
    flex-direction: column;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 1rem;
  }
</style>