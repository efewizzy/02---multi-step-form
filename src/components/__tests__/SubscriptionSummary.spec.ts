import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SubscriptionSummary from "../SubscriptionSummary.vue";

describe('SubscriptionSummary', () => {
    it('renders properly', () => {
        const wrapper = mount(SubscriptionSummary, {
            props: {
                plan: 'Test Plan',
                planType: 'Monthly',
                planPrice: 'Test plan price',
                addOns: ['Test addon'],
                addOnPrice: ['Test addOn price'],
                totalBill: 'Test total bill'
            }
        })

        expect(wrapper.find('h5[data-type="test-main"]').text()).toEqual('Test Plan(Monthly)')
        expect(wrapper.find('p[data-type="test-price"]').text()).toEqual('Test plan price')
        expect(wrapper.find('p[data-type="test-addon"]').text()).toEqual('Test addon')
        expect(wrapper.find('p[data-type="test-addon-price"]').text()).toEqual('Test addOn price')
        expect(wrapper.find('p[data-type="test-price-text"]').text()).toEqual('Total (per month)')
        expect(wrapper.find('h5[data-type="test-bill"]').text()).toEqual('Test total bill')
    })
})