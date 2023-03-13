<script setup lang="ts">
const props = defineProps<{
    title: string,
    text: string,
    type: string,
    modelValue: string,

}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void
}>()
</script>

<template>
    <h5 class="mb-2 text-sm">{{ title }}</h5>
    <input 
        :type="type" 
        :placeholder="text" 
        :value="modelValue" 
        @input="emit('update:modelValue', (<HTMLTextAreaElement>$event.target).value )"
        class="p-3 mb-5 border border-LightGray rounded-lg w-full placeholder:text-CoolGray"
    >
</template>