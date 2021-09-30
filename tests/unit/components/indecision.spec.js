import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => {
    let wrapper;
    let clgSpy;
    let getAnswerSpy;

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
        getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        jest.clearAllMocks()
    })
    test('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(Indecision)

        expect(wrapper.html()).toMatchSnapshot()
    })
    test('escribir en el input no debe de disparar nada(console.log)', async() => {

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect(clgSpy).toHaveBeenCalled()
        expect(getAnswerSpy).toHaveReturnedTimes(0)
            // expect(getAnswerSpy).toHaveBeenCalled(0)  //Prueba para saber si no se llamo una funcion 
            // expect(getAnswerSpy).not.toHaveBeenCalled()

    });
    test('escribir el simbolo de "?" debe de disparar el getAnswer', async() => {
        const input = wrapper.find('input')
        await input.setValue('hola?')

        expect(getAnswerSpy).toHaveBeenCalled()


    });
    test('pruebas de getAnswer', async() => {
        await wrapper.vm.getAnswer()
        const img = await wrapper.find('img')

        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si!')
    });
    test('pruebas de getAnswer - fallo en el api', async() => {

        fetch.mockImplementationOnce(() => Promise.reject('API is failed'))

        await wrapper.vm.getAnswer()

        const img = await wrapper.find('img')

        expect(img.exists()).toBeFalsy()

        expect(wrapper.vm.answer).toBe('No se pudo cargar del API')

    });

})