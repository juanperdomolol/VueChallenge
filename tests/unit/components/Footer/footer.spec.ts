import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Footer from "@/components/Footer/Footer.vue";
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
        const wrapper = mount(Footer, {
            computed: {
                checksAll() {
                    return [];
                }
            },
            store,
            localVue
        })
        expect(wrapper.find(".footer").exists()).toBe(false)
    })
    test('Valida si hay  y  muestra', () => {
        const wrapper = mount(Footer, {
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
        expect(wrapper.find(".footer").exists()).toBe(true)
    })
})

