<script setup lang="ts">


const props = defineProps<{
    title: string,
    subtitle: string
}>()
</script>

<template>
    <div class="lg:mb-10 mb-5 mt-5">
        <h1 class="font-bold text-2xl lg:text-3xl mb-2">{{ title }}</h1>
        <h5 class="text-CoolGray mb-3">{{ subtitle }}</h5>
    </div>
</template>