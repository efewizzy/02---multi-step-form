<script setup lang="ts">
const props = defineProps<{
    icon: string
    title: string
    price: string
    yearlyPrice: string
    yearly: boolean
    modelValue: string
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
    <button 
        @click.prevent="emits('update:modelValue', title)"
        class="p-3 mr-4 border rounded-lg text-left w-36"
        :class="modelValue === title ? 'border-PurplishBlue bg-Magnolia' : 'border-LightGray'"
    >
        <span><img :src="icon" alt="Arcade Icon" class="mt-2 mb-10"></span>
        <h5 class="font-bold text-xl">{{title}}</h5>
        <p class="text-CoolGray">{{yearly ? yearlyPrice : price}}</p>
        <p v-if="yearly" class="text-sm">2 months free</p>
    </button>
</template>