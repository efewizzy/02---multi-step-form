<script setup lang="ts">


const props = defineProps<{
    title: string,
    subtitle: string
}>()
</script>

<template>
    <div class="mb-10 mt-5">
        <h1 class="font-bold text-3xl mb-2">{{ title }}</h1>
        <h5 class="text-CoolGray mb-3">{{ subtitle }}</h5>
    </div>
</template>