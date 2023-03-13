import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FormInput from '../FormInput.vue';
import { title } from "process";

describe('FormInput', () => {
    const wrapper = mount(FormInput, {
        props: {
            title: 'Form Title',
            text: 'I am the Placeholder',
            type: 'text',
            modelValue: '',
            'onUpdate:modelValue': (e: string) => {wrapper.setProps({modelValue: e})}
        }
    })

    it('renders properly', () => {

        expect(wrapper.find('h5').text()).toEqual('Form Title')
    })

    it('stores user input, and updates modelValue', async () => {
        
        await wrapper.find('input').setValue('This is a test')

        expect(wrapper.props('modelValue')).toBe('This is a test')
    })
})