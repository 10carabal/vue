import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })



    // test('debe de hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('h2 debe tener el valor por defecto "Counter"', () => {

        // const wrapper = shallowMount(Counter)
        // expect(wrapper.find('h2').exists()).toBeTruthy()
        // const h2Value = wrapper.find('h2').text()

        // //console.log(h2.text())
        // expect(h2Value).toBe('Counter')

    });

    test('el valor por defecto debe ser 100 en el p', () => {
        //const wrapper = shallowMount(Counter)
        //const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-test-id="counter"]').text()

        expect(value).toBe('100')
            //expect(pTags[1].text()).toBe('100')
    });

    test('debe incrementar y decrementar el valor del contador', async() => {
        // const wrapper = shallowMount(Counter)
        // const increaseBtn = wrapper.find('button')
        // await increaseBtn.trigger('click')
        // const value = wrapper.find('[data-test-id="counter"]').text()
        // expect(value).toBe('101')

        // const decreaseBtn = wrapper.find('[data-test-id="btndecrease"]')
        // await decreaseBtn.trigger('click')
        // await decreaseBtn.trigger('click')
        // const decrease = wrapper.find('[data-test-id="counter"]').text()
        // expect(decrease).toBe('99')

        //refactor
        //const wrapper = shallowMount(Counter)

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')


        const value = wrapper.find('[data-test-id="counter"]').text()


        expect(value).toBe('101')
    });

    test('debe de establecer el valor por defecto', () => {

        const { start } = wrapper.props()
            //const start = wrapper.props('start')
        const value = wrapper.find('[data-test-id="counter"]').text()

        expect(Number(value)).toBe(start)
    });

    test('debe de mostrar la prod title', () => {

        const title = 'Hola Mundo!!!!!!'

        const wrapper = shallowMount(Counter, {
            props: {
                title,
            }
        })
        expect(wrapper.find('h2').text()).toBe(title)

        // const wrapper = shallowMount(Counter, {
        //     props: {
        //         title: 'Hola Mundo'
        //     }
        // })
        // expect(wrapper.find('h2').text()).toBe('Hola Mundo')
    });


})