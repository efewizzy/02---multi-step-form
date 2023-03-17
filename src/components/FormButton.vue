<script setup lang="ts">
const props = defineProps<{
    text: string
    color?: boolean
}>()
</script>

<template>
    <button 
        class="p-3 px-6 lg:mt-16 rounded-lg hover:bg-primary"
        :class="color ? 'text-CoolGray bg-White hover:text-MarineBlue' : 'text-White bg-MarineBlue'"
    >
        {{ text }}
    </button>
</template>