import Vue from "vue";
import Task from "../models/Task";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [ ] as Task[],
    filter: 'all' as String, 
    // checksAll: false as Boolean
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    // checksAll(state) {
    //   return state.checksAll
    // }
  },
  mutations: {
    setFilter: (state, payload) => state.filter = payload ,

    setChecks(state, payload) {
      const allTodosCheks = state.tasks.map(tsk=>{
        return {
          ...tsk,
          completed: true
        }
      })
      state.tasks = [...allTodosCheks]
      // state.checksAll = true
    },
    
    addItem: (state, item) => state.tasks = [ ...state.tasks, item ] 
     ,

    editItem(state, { task, value, status = false }) {
      const newState = state.tasks.map( tsk => {
        if (tsk._id === task._id) {
          return {
            ...tsk,
            name: value,
            completed: status
          }
        }
        return tsk
      })
      // state.checksAll = false
      state.tasks = [...newState] 
    },
    removeItem(state, item) {
      const newState = state.tasks.filter( task => task !== item)
      state.tasks = newState
    },
    deleteTodoDone(state, item){
      const newState = state.tasks.filter(item => item.completed == true)
      console.log(newState, 'nose')
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit("addItem", { item });
    },
    editItem({ commit }, { task, value, status }) {
      commit("editItem", { task, value });
    },
    toggleItem({ commit },  task ) {
      commit("editItem", { task, value: task.name, status: true });
    },
    deleteItem ({commit},item){
      commit("removeItem",item)
    },
    allChecks ({commit},tasks){
      commit("setChecks", tasks)
    },
    deleteteTodos({commit},item){
      commit("deleteTodoDone", item)
    }
  },
  modules: {},
});
