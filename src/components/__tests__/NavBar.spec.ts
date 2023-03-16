import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import NavBar from "../NavBar.vue";
import { desktopView } from "@/store/store";

describe('NavBar', () => {
    it('renders properly', async () => {
        const wrapper = mount(NavBar, {
            props: {
                number: 1,
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                currentStep: true,
                desktopView: false
            }
        })

        expect(wrapper.find('p[data-type="test-number"]').text()).toEqual('1')

        await wrapper.setProps({desktopView: true})

        expect(wrapper.find('p[data-type="test-title"]').exists()).toBe(true)
        expect(wrapper.find('p[data-type="test-title"]').text()).toEqual('Test Title')
        expect(wrapper.find('p[data-type="test-subtitle"]').exists()).toBe(true)
        expect(wrapper.find('p[data-type="test-subtitle"]').text()).toEqual('Test Subtitle')
    })
})