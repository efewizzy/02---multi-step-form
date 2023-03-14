import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FormSwitch from "../FormSwitch.vue";

describe('FormSwitch', () => {
    const wrapper = mount(FormSwitch, {
        props: {
            modelValue: false,
            'onUpdate:modelValue': (e: boolean) => wrapper.setProps({modelValue: e})
        }
    })

    it('renders properly', () => {

        expect(wrapper.get('label')).toMatchSnapshot()
    })

    it('updates on click', async () => {

        await wrapper.find('input').setValue()

        expect(wrapper.props('modelValue')).toBe(true)
    })
})