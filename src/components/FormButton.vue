<script setup lang="ts">
const props = defineProps<{
    text: string
}>()
</script>

<template>
    <button class="text-White bg-MarineBlue p-3 px-6 mt-16 rounded-lg">{{ text }}</button>
</template>