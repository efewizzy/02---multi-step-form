<script setup lang="ts">
const props = defineProps<{
    icon: string
    title: string
    price: string
    yearlyPrice: string
    yearly: boolean
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
    <button 
        @click.prevent="emit('update:modelValue', title)"
        class="p-3 lg:mr-4 mb-3 border rounded-lg text-left lg:w-36 w-full flex flex-row items-center lg:block"
        :class="modelValue === title ? 'border-PurplishBlue bg-Magnolia' : 'border-LightGray'"
    >
        <span><img :src="icon" :alt="title + ` Icon`" class="lg:mt-2 lg:mb-10 mr-3"></span>
        <div>
            <h5 class="font-bold lg:text-xl">{{title}}</h5>
            <p data-type="test-price" class="text-CoolGray">{{yearly ? yearlyPrice : price}}</p>
            <p data-type="test-yearly" v-if="yearly" class="text-xs lg:text-sm">2 months free</p>
        </div>
    </button>
</template>