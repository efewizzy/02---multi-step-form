import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PlanSelect from "../PlanSelect.vue";

describe('PlanSelect', () => {
    const wrapper = mount(PlanSelect, {
        props: {
            icon: '',
            title: 'Test Title',
            price: '$Test Price',
            yearlyPrice: '$Yearly Test Price',
            yearly: false,
            modelValue: '',
            'onUpdate:modelValue': (e: string) => wrapper.setProps({modelValue: e})
        }
    })

    it('renders properly', async () => {

        expect(wrapper.find('h5').text()).toEqual('Test Title')
        expect(wrapper.find('p[data-type="test-price"]').text()).toEqual('$Test Price')
        
        await wrapper.setProps({yearly: true})
        
        expect(wrapper.find('p[data-type="test-price"]').text()).toEqual('$Yearly Test Price')
        expect(wrapper.find('p[data-type="test-yearly"]').exists()).toBe(true)
        expect(wrapper.find('p[data-type="test-yearly"]').text()).toEqual('2 months free')
    })

    it('accepts user selection, and updates modelValue', async () => {
        await wrapper.find('button').trigger('click.prevent')

        expect(wrapper.props('modelValue')).toBe('Test Title')
    })
})