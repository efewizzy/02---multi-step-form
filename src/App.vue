<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import FirstStep from './components/FirstStep.vue';
import { ref } from 'vue';

const currentStep = ref('FirstStep')

const steps: any = {
  FirstStep,
}

const navTexts = [
  {
    number: 1,
    title: 'Step 1',
    subtitle: 'Your Info',
    step: 'FirstStep'
  },
  {
    number: 2,
    title: 'Step 2',
    subtitle: 'Select plan'
  },
  {
    number: 3,
    title: 'Step 3',
    subtitle: 'Add-ons'
  },
  {
    number: 4,
    title: 'Step 4',
    subtitle: 'Summary'
  },
]

console.log(steps)
</script>

<template>
  <main class="bg-White rounded-xl m-auto p-3 flex flex-row max-h-[37rem]">
    <nav class="bg-[url('/assets/bg-sidebar-desktop.svg')] bg-contain rounded-xl p-10 mr-5 uppercase w-[17.125rem] h-[35.5rem]" style="letter-spacing: 1.75px;">
      <NavBar 
        v-for="text in navTexts"
        :number="text.number" 
        :title="text.title" 
        :subtitle="text.subtitle"
        :currentStep="text.step === currentStep ? true : false "
      />
    </nav>

    <component :is="steps[currentStep]" />
  </main>
</template>

<style scoped>
</style>
