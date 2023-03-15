<script setup lang="ts">
import { provide, ref } from 'vue';
import FormButton from '../FormButton.vue';
import FormSwitch from '../FormSwitch.vue';
import PageTitle from '../PageTitle.vue';
import PlanSelect from '../PlanSelect.vue';
import { subscription } from '@/store/store';

const emit = defineEmits<{
    (e: 'change', value: string): void
    (e: 'billing', value: boolean): void
}>()

const selectedPlan = ref('Arcade')

const billing = ref(false)

const plans = [
    {
        icon: 'assets/icon-arcade.svg',
        title: 'Arcade',
        price: '$9/mo',
        yearlyPrice: '$90/yr'
    },
    {
        icon: 'assets/icon-advanced.svg',
        title: 'Advanced',
        price: '$12/mo',
        yearlyPrice: '$120/yr'
    },
    {
        icon: 'assets/icon-pro.svg',
        title: 'Pro',
        price: '$15/mo',
        yearlyPrice: '$150/yr'
    }
]

function submit() {
    emit('change', 'ThirdStep')
    subscription.plan = selectedPlan.value
    const price = () => {
        for (const plan of plans) {
            if (plan.title === selectedPlan.value && billing.value === false) {
                subscription.planPrice = plan.price
            } else if (plan.title === selectedPlan.value && billing.value === true) {
                subscription.planPrice = plan.yearlyPrice
            }
        }
    }
    const type = () => {
        if (billing.value == false) {
            subscription.planType = 'Monthly'
        } else {
            subscription.planType = 'Yearly'
        }
    }
    price()
    type()
    console.log(subscription);
}
</script>

<template>
    <PageTitle title="Select your plan" subtitle="You have the option of monthly or yearly billing." />
    <form action="">
        <div class="flex flex-row">
            <PlanSelect 
                v-for="plan in plans"
                :title="plan.title" 
                :price="plan.price" 
                :icon="plan.icon" 
                :yearlyPrice="plan.yearlyPrice"
                :yearly="billing"
                v-model="selectedPlan"
            />
        </div>
        <div class="mt-10 p-2 flex flex-row justify-center items-center bg-Magnolia">
            <span :class="billing ? 'text-CoolGray font-bold' : 'font-bold' ">Monthly</span>
            <span class="mx-5 mt-2"><FormSwitch v-model="billing"/></span>
            <span :class="billing ? 'font-bold' : 'text-CoolGray font-bold' ">Yearly</span>
        </div>
        <div class="grid grid-cols-2 mt-10">
            <FormButton @click.prevent="emit('change', 'FirstStep')" class="justify-self-start" text="Go Back" :color="true" />
            <FormButton @click.prevent="submit()" class="justify-self-end" text="Next Step" />
        </div>
    </form>
</template>