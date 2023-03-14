<script setup lang="ts">
const props = defineProps<{
    text: string
    color?: boolean
}>()
</script>

<template>
    <button 
        class="p-3 px-6 mt-16 rounded-lg"
        :class="color ? 'text-CoolGray bg-none' : 'text-White bg-MarineBlue'"
    >
        {{ text }}
    </button>
</template>