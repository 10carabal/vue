import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
    })
    test('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(Indecision)

        expect(wrapper.html()).toMatchSnapshot()
    })
    test('escribir en el input no debe de disparar nada(console.log)', () => {

    });
    test('escribir el simbolo de "?" debe de disparar el fetch', () => {

    });
    test('pruebas de getAnswer', () => {

    });
    test('pruebas de getAnswer - fallo en el api', () => {

    });

})