import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AddOns from "../AddOns.vue";

describe('AddOns', () => {
    const wrapper = mount(AddOns, {
        props: {
            id: 1,
            title: 'Test Title',
            subtitle: 'Test Subtitle',
            price: 'Test Price',
            modelValue: false,
            'onUpdate:modelValue': (e: boolean) => wrapper.setProps({modelValue: true}),
        }
    })

    it('renders properly', () => {

        expect(wrapper.find('h5').text()).toEqual('Test Title')
        expect(wrapper.find('p[data-type="test-subtitle"]').text()).toEqual('Test Subtitle')
        expect(wrapper.find('p[data-type="test-price"]').text()).toEqual('Test Price')
    })

    it('updates modelValue', async () => {

        await wrapper.find('input[type="checkbox"]').trigger('change')

        expect(wrapper.props('modelValue')).toBe(true)
    })
})