import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FormButton from "../FormButton.vue";

describe('FormButton', () => {
    it('renders properly', () => {
        const wrapper = mount(FormButton, {
            props: {
                text: 'Confirm'
            }
        })

        expect(wrapper.find('button').text()).toEqual('Confirm')
    })
})