<script setup lang="ts">
const props = defineProps<{
    plan: string,
    planType: string,
    planPrice: string,
    addOns: object,
    addOnPrice: object,
    totalBill: string
}>()
const emit = defineEmits<{
    (e: 'change', value: string): void
}>()
</script>

<template>
    <div class="bg-Magnolia p-5 pb-0 rounded-lg mb-3">
        <div class="grid grid-cols-[5fr,1fr] mb-2">
            <div>
                <h5 data-type="test-main" class="text-lg font-bold">{{ plan }}({{ planType }})</h5>
                <p class="text-CoolGray underline cursor-pointer hover:text-PurplishBlue" @click="emit('change', 'SecondStep')">Change</p>
            </div>
            <p data-type="test-price" class="justify-self-end self-center text-lg font-bold">{{ planPrice }}</p>
        </div>
        <hr class="my-5 border-LightGray">
        <div class="grid grid-cols-2">
            <div class="grid justify-self-start">
                <p data-type="test-addon" class="text-CoolGray mb-3" v-for="addOn in addOns">{{ addOn }}</p>
            </div>
            <div class="grid justify-self-end">
                <p data-type="test-addon-price" class="justify-self-end mb-3" v-for="price in addOnPrice">{{ price }}</p>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-[5fr,1fr] p-5">
        <p data-type="test-price-text" class="text-CoolGray">{{ `Total (per ${planType === 'Monthly' ? 'month' : 'year' })` }}</p>
        <h5 data-type="test-bill" class="text-PurplishBlue text-xl font-bold">{{ totalBill }}</h5>
    </div>
</template>