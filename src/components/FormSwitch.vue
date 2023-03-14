<script setup lang="ts">
const props = defineProps<{
    modelValue: boolean
}>()
const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
}>()
</script>

<template>
        <input type="checkbox" id="switch" true-value="yearly" false-value="monthly" :checked="modelValue" @change="emits('update:modelValue', (<HTMLInputElement>$event.target).checked)" class="opacity-0 w-0 h-0">
        <label for="switch" class="relative inline-block w-10 h-5 top-0 left-0 right-0 bottom-0 cursor-pointer rounded-3xl bg-MarineBlue before:absolute before:h-3 before:w-3 before:rounded-[50%] before:bg-White before:left-1 before:top-1 before:transition-all"></label>
</template>

<style scoped>
input:checked + label::before {
    left: 1.5rem;
}
</style>