<script setup lang="ts">
import PageTitle from '../PageTitle.vue';
import FormButton from '../FormButton.vue';
import { subscription, total } from '@/store/store';

const emits = defineEmits<{
    (e: 'change', value: string): void
}>()

total()
</script>

<template>
    <PageTitle title="Finishing up" subtitle="Double-check everything looks OK before confirming." />
    <div class="bg-Magnolia p-5 pb-0 rounded-lg mb-3">
        <div class="grid grid-cols-[5fr,1fr] mb-2">
            <div>
                <h5 class="text-lg font-bold">{{ subscription.plan }}({{ subscription.planType }})</h5>
                <p class="text-CoolGray">Change</p>
            </div>
            <p class="justify-self-end self-center text-lg font-bold">{{ subscription.planPrice }}</p>
        </div>
        <hr class="my-5 border-LightGray">
        <div class="grid grid-cols-2">
            <div class="grid justify-self-start">
                <p class="text-CoolGray mb-3" v-for="addOn in subscription.addOn">{{ addOn }}</p>
            </div>
            <div class="grid justify-self-end">
                <p class="justify-self-end mb-3" v-for="price in subscription.addOnPrice">{{ price }}</p>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-[5fr,1fr] p-5">
        <p class="text-CoolGray">{{ `Total (per ${subscription.planType === 'Monthly' ? 'month' : 'year' })` }}</p>
        <h5 class="text-PurplishBlue text-xl font-bold">{{ subscription.totalBill }}</h5>
    </div>
    <div class="grid grid-cols-2 mt-5">
        <FormButton @click.prevent="emits('change', 'ThirdStep')" class="justify-self-start" text="Go Back" :color="true" />
        <FormButton @click.prevent="emits('change', '')" class="justify-self-end" text="Confirm" />
    </div>
</template>