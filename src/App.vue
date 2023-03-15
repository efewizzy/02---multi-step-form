<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import FirstStep from './components/Steps/FirstStep.vue';
import SecondStep from './components/Steps/SecondStep.vue';
import ThirdStep from './components/Steps/ThirdStep.vue';
import FourthStep from './components/Steps/FourthStep.vue';
import ConfirmPage from './components/Steps/ConfirmPage.vue';
import { ref, provide, reactive, type Ref, watch } from 'vue';
import { subscription } from './store/store';

subscription.name = ''
subscription.email = ''
subscription.number = ''
subscription.plan = ''
subscription.planPrice = ''
subscription.planType = ''
subscription.addOn = []
subscription.addOnPrice = []
subscription.totalBill = ''

console.log(subscription)

const currentStep = ref('FirstStep')

const steps: any = {
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
  ConfirmPage
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
    step: 'FourthStep',
    confirm: 'ConfirmPage'
  },
]

const test = reactive([''])

watch(test, 
  (test) => console.log(test)
)

const billing = ref(false)

provide('yearly', billing.value)

</script>

<template>
  <main class="bg-White rounded-xl m-auto p-3 flex flex-row max-h-[37rem]">
    <nav class="bg-[url('/assets/bg-sidebar-desktop.svg')] bg-contain rounded-xl p-10 mr-5 uppercase w-[17.125rem] h-[35.5rem]" style="letter-spacing: 1.75px;">
      <NavBar 
        v-for="text in navTexts"
        :number="text.number" 
        :title="text.title" 
        :subtitle="text.subtitle"
        :currentStep="text.step === currentStep || text.confirm === currentStep ? true : false "
      />
    </nav>

    <div class="m-auto mx-20">
      <component 
        :is="steps[currentStep]" 
        @change="(e: string) => currentStep = e" 
      />
    </div>
  </main>
</template>

<style scoped>
</style>
