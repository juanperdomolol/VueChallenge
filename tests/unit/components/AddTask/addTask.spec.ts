import { mount, createLocalVue,shallowMount  } from "@vue/test-utils";
import AddTask from "@/components/AddTask/index.vue";
// import Vuex, { Store } from "vuex";
import { Task } from './../../../../src/models/Task';

// const localVue = createLocalVue();

// localVue.use(Vuex);

describe('',()=>{
    test('verificar input vacio y luego llenarlo',()=>{
        const wrapper = shallowMount(AddTask);
        expect(wrapper.vm.$data.taskName).toEqual("")
        const taskName = "1. I have make a test";
        console.log(wrapper)
        wrapper.setData({taskName})

        expect(wrapper.vm.$data.taskName).toEqual(taskName)
        
    })
    // test('da enter, limpia input',async ()=>{
    //     const wrapper = mount(AddTask)
    //     const taskName = "1. I have make a test";
    //     wrapper.setData({taskName})
    //     await wrapper.find(".addTask").trigger("keyup.enter");
    //     await wrapper.vm.$nextTick();
    //     expect (wrapper.vm.$data.taskName).toEqual("")
    //     // const vm = wrapper.vm
    //     // console.log(wrapper)
        
    // })
    // test('agrega la tarea y limpia el input',()=>{
        
    // })
})