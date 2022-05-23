import { mount, createLocalVue } from "@vue/test-utils";
import ListTask from "@/components/List/ListTasks.vue";
import Vuex, { Store } from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Test component list ', () => {
    let getters: any;
    let mutations: any;
    let store: Store<any>;

    beforeEach(() => {
        getters = {
            tasks: jest.fn(),
        };
        mutations = {
            setFilter: jest.fn(),
            setChecks: jest.fn()
        }
        store = new Vuex.Store({
            getters,
            mutations,
            state: {},
        });
    })
    test('titulo de no hay tareas', () => {
        const wrapper = mount(ListTask, {
            computed: {
                filtersTask() {
                    return []
                }
            },
            store,
            localVue
        })
        expect(wrapper.find(".empty-tasks").exists()).toBe(true)
    })
    test('presenta titulo tarea', () => {
        const wrapper = mount(ListTask, {
            computed: {
                filtersTask() {
                    return [
                        { "_id": "ba765be6-f2a6-4297-814e-56194c35c371", "name": "aaaaaaa", "completed": true }
                    ]
                },
                checksAll() {
                    return [
                        { "_id": "ba765be6-f2a6-4297-814e-56194c35c371", "name": "aaaaaaa", "completed": true }
                    ]
                }
            },
            store,
            localVue
        })
        expect(wrapper.find(".exists-tasks").exists()).toBe(true)
    })
   
})