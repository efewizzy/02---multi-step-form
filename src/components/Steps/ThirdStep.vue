<script setup lang="ts">
import PageTitle from "../PageTitle.vue";
import FormButton from "../FormButton.vue";
import AddOns from "../AddOns.vue";
import { reactive, ref } from "vue";

const emits = defineEmits<{
  (e: "change", value: string): void
}>();

const select = ref(false)

const selectedAddOn: Array<string> = reactive([])

const addOns = reactive([
  {
    id: 1,
    title: "Online Service" ,
    subtitle: "Access to multiplayer games" ,
    price: "+$1/mo",
    select: false
  },
  {
    id: 2,
    title: "Larger Storage" ,
    subtitle: "Extra 1TB of cloud save" ,
    price: "+$2/mo",
    select: false
  },
  {
    id: 3,
    title: "Customizable Profile" ,
    subtitle: "Custom theme on your profile" ,
    price: "+$2/mo",
    select: false
  }
])
</script>

<template>
  <PageTitle
    title="Pick add-ons"
    subtitle="Add-ons help enhance your gaming experience."
  />
  <form action="">
    <AddOns 
      v-for="addOn in addOns"
      :id="addOn.id"
      :title="addOn.title" 
      :subtitle="addOn.subtitle" 
      :price="addOn.price" 
      v-model="addOn.select"
      @update-selected="(e) => {
          if(selectedAddOn.length > 0 && selectedAddOn.includes(e)) {
            selectedAddOn = selectedAddOn.filter((value) => value !== e)
          } else {
            selectedAddOn.push(e)
          }
        }" 
      />
    <div class="grid grid-cols-2 mt-3">
      <FormButton
        @click.prevent="emits('change', 'SecondStep')"
        class="justify-self-start"
        text="Go Back"
        :color="true"
      />
      <FormButton
        @click.prevent="emits('change', 'FourthStep')"
        class="justify-self-end"
        text="Next Step"
      />
    </div>
  </form>
</template>
