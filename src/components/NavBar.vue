<script setup lang="ts">
const props = defineProps<{
    number: number,
    title: string,
    subtitle: string,
    currentStep: boolean
    desktopView: boolean
}>()
</script>

<template>
    <div class="flex lg:flex-row lg:mb-5 w-max h-max">
        <p 
            data-type="test-number"
            class="p-3 mr-3 lg:h-10 lg:w-10 w-8 h-8 flex justify-center items-center text-sm rounded-[50%] "
            :class="currentStep ? 'bg-secondary font-bold' : 'bg-none text-White border border-White'"
        >
            {{ number }}
        </p>
        <div v-if="desktopView">
            <p data-type="test-title" class="text-CoolGray text-xs">{{ title }}</p>
            <p data-type="test-subtitle" class="text-Alabaster text-sm font-normal">{{ subtitle }}</p>
        </div>
    </div>
</template>