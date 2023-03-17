<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import FormButton from './components/FormButton.vue';
import FirstStep from './components/Steps/FirstStep.vue';
import SecondStep from './components/Steps/SecondStep.vue';
import ThirdStep from './components/Steps/ThirdStep.vue';
import FourthStep from './components/Steps/FourthStep.vue';
import ConfirmPage from './components/Steps/ConfirmPage.vue';
import { ref } from 'vue';
import { subscription, desktopView } from './store/store';

subscription.name = ''
subscription.email = ''
subscription.number = ''
subscription.plan = ''
subscription.planPrice = ''
subscription.planType = ''
subscription.addOn = []
subscription.addOnPrice = []
subscription.totalBill = ''

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

const next = () => {
  if(currentStep.value === 'FirstStep') {
    currentStep.value = 'SecondStep'
  } else if (currentStep.value === 'SecondStep') {
    currentStep.value = 'ThirdStep'
  } else if (currentStep.value === 'ThirdStep') {
    currentStep.value = 'FourthStep'
  } else if (currentStep.value === 'FourthStep') {
    currentStep.value = 'ConfirmPage'
  }
}

const back = () => {
  if (currentStep.value === 'FourthStep') {
    currentStep.value = 'ThirdStep'
  } else if (currentStep.value === 'ThirdStep') {
    currentStep.value = 'SecondStep'
  } else if (currentStep.value === 'SecondStep') {
    currentStep.value = 'FirstStep'
  }
}
</script>

<template>
  <main class="bg-background lg:bg-White lg:rounded-xl lg:m-auto lg:p-3 lg:flex lg:flex-row lg:max-h-[37rem]">
    <nav class="bg-[url('/assets/bg-sidebar-mobile.svg')] w-full h-[10.75rem] lg:bg-[url('/assets/bg-sidebar-desktop.svg')] bg-contain lg:rounded-xl lg:p-10 lg:mr-5 uppercase lg:w-[17.125rem] lg:h-[35.5rem] flex flex-row pt-8 justify-center lg:block" style="letter-spacing: 1.75px;">
      <NavBar 
        v-for="text in navTexts"
        :number="text.number" 
        :title="text.title" 
        :subtitle="text.subtitle"
        :desktopView="desktopView"
        :currentStep="text.step === currentStep || text.confirm === currentStep ? true : false " 
      />
    </nav>

    <div class="lg:m-auto lg:mx-20 lg:p-0" :class="desktopView ? '' : '-mt-20 mx-5 p-5 pt-2 h-max bg-White rounded-lg shadow-lg' ">
      <component 
        :is="steps[currentStep]"
        @change="(e: string) => currentStep = e" 
      />
    </div>

    <div v-if="!desktopView" class="bg-White grid fixed bottom-0 p-3 w-full h-max" :class="currentStep !== 'FirstStep' ? 'grid-cols-2' : 'grid-cols-1'">
            <FormButton v-show="currentStep !== 'FirstStep' && currentStep !== 'ConfirmPage'" @click.prevent="back()" class="justify-self-start" text="Go Back" :color="true" />
            <FormButton v-show="currentStep !== 'ConfirmPage'" @click.prevent="next()" class="justify-self-end" text="Next Step" />
        </div>
  </main>
</template>

<style scoped>
</style>
