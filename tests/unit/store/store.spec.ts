import { mount, createLocalVue } from "@vue/test-utils";
import StoreApp from "@/store";
import Vuex, { Store } from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Test component list ', () => {
    let state: any
    let getters: any;
    let mutations: any;
    let store: Store<any>;

    beforeEach(() => {
        state = {
            tasks: [
                {
                    _id: "1b55f826-a37b-4c3c-b8c3-b99daa30c425",
                    name: "Create components",
                    completed: true
                },
                {
                    _id: "b66c901f-ee59-4245-8756-112ee72f33ce",
                    name: "Add styles", "completed": false
                },
                {
                    _id: "dd85df2c-c503-4b56-8cb1-13b2f3941bfe",
                    name: "Remove comments",
                    completed: false
                }
            ]
        }
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
            state,
        });
    })
    // test('titulo de no hay tareas', () => {
    //     const wrapper = mount(StoreApp, {
    //         computed: {
    //             filtersTask() {
    //                 return []
    //             }
    //         },
    //         store,
    //         localVue
    //     })
    //     expect(wrapper.find(".empty-tasks").exists()).toBe(true)
    // })

})