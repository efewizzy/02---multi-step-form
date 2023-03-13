<script setup lang="ts">
const props = defineProps<{
    number: number,
    title: string,
    subtitle: string,
    currentStep?: boolean
}>()
</script>

<template>
    <div class="flex flex-row mb-5">
        <p 
            class="p-3 mr-3 h-10 w-10 flex justify-center items-center text-sm rounded-[50%] "
            :class="currentStep ? 'bg-secondary font-bold' : 'bg-none text-White border border-White'"
        >
            {{ number }}
        </p>
        <div>
            <p class=" text-CoolGray text-xs">{{ title }}</p>
            <p class="text-Alabaster text-sm font-normal">{{ subtitle }}</p>
        </div>
    </div>
</template>