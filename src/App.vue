<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import FirstStep from './components/FirstStep.vue';
import SecondStep from './components/SecondStep.vue';
import { ref } from 'vue';

const currentStep = ref('FirstStep')

const steps: any = {
  FirstStep,
  SecondStep
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
    subtitle: 'Select plan',
    step: 'SecondStep'
  },
  {
    number: 3,
    title: 'Step 3',
    subtitle: 'Add-ons',
    step: 'ThirdStep'
  },
  {
    number: 4,
    title: 'Step 4',
    subtitle: 'Summary',
    step: 'FourthStep'
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

    <div class="m-auto mx-20">
      <component :is="steps[currentStep]" @change="(e: string) => {currentStep = e}" />
    </div>
  </main>
</template>

<style scoped>
</style>
