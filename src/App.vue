<template>
<div>
  <Header/>
  <div id="app" class="container">
    <div class="d-fluid">
      <Task/>
      <List/>
      <Stacks />
    </div> 
  </div>
  <Footer/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Task from './components/AddTask/index.vue';
import List from './components/List/ListTasks.vue'
import Stacks from './components/Stacks/Stacks.vue';
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
// @Component({
//   components: {
//     HelloWorld,
//   },
// })
// export default class App extends Vue {

  
// }
export default Vue.extend({
  name: "App",
  components: {
    Task,
    List,
    Stacks,
    Header,
    Footer
},

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">

.container {
  margin: auto;
  padding: 30px 0;
  border-radius: 10px;

  }
.d-fluid {
  display: flex;
  flex-direction: column;
}



</style>
