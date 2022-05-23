import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Header from "@/components/Header/Header.vue";
import Vuex, { Store } from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);
describe('show component', () => {
    let getters: any;
    let store: any;

    beforeEach(() => {
        getters = {
            tasks: jest.fn(),
        };
        store = new Vuex.Store({
            getters,
            state: {},
        });
    })
    test('Valida si hay tareas y no muestra', () => {
        const wrapper = mount(Header, {
            computed: {
                checksAll() {
                    return [];
                }
            },
            store,
            localVue
        })
        expect(wrapper.find(".head").exists()).toBe(false)

    })
    test('Valida si hay  y  muestra', () => {
        const wrapper = mount(Header, {
            computed: {
                checksAll() {
                    return [
                        { "_id": "7c8658ac-ef50-49da-82fc-35fbd3af7e63", "name": "todo test", "completed": false }
                    ];
                }
            },
            store,
            localVue
        })
        expect(wrapper.find(".head").exists()).toBe(true)
    })
})

