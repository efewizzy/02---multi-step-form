import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PageTitle from '../PageTitle.vue';

describe('PageTitle', () => {
    it('renders properly', () => {
        const wrapper = mount(PageTitle, {
            props: {
                title: 'Page Title', 
                subtitle: 'Page Subtitle'
            }
        })

        expect(wrapper.find('h1').text()).toEqual('Page Title')
        expect(wrapper.find('h5').text()).toEqual('Page Subtitle')
    })
})