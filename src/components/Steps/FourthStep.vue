<script setup lang="ts">
import PageTitle from '../PageTitle.vue';
import FormButton from '../FormButton.vue';
import { desktopView, subscription, total } from '@/store/store';
import SubscriptionSummary from '../SubscriptionSummary.vue';

const emit = defineEmits<{
    (e: 'change', value: string): void
}>()

total()
</script>

<template>
    <PageTitle title="Finishing up" subtitle="Double-check everything looks OK before confirming." />
    <SubscriptionSummary 
        :plan="subscription.plan" 
        :plan-type="subscription.planType" 
        :plan-price="subscription.planPrice" 
        :add-ons="subscription.addOn" 
        :add-on-price="subscription.addOnPrice" 
        :total-bill="subscription.totalBill" 
        @change="emit('change', 'SecondStep')"
        />
    <div v-if="desktopView" class="grid grid-cols-2 mt-5">
        <FormButton @click.prevent="emit('change', 'ThirdStep')" class="justify-self-start" text="Go Back" :color="true" />
        <FormButton @click.prevent="emit('change', 'ConfirmPage')" class="justify-self-end" text="Confirm" />
    </div>
</template>