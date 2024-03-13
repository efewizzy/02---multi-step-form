<script setup lang="ts">
import PageTitle from "../PageTitle.vue";
import FormButton from "../FormButton.vue";
import AddOns from "../AddOns.vue";
import { ref, reactive, watch } from "vue";
import { desktopView, subscription } from "@/store/store";

const emit = defineEmits<{
  (e: "change", value: string): void
}>();

const props = defineProps<{
    next: boolean
}>()

const selectedAddOn = ref(["Online Service","Larger Storage"])

const addOns = reactive([
  {
    id: 1,
    title: "Online Service" ,
    subtitle: "Access to multiplayer games" ,
    price: "+$1/mo",
    yearlyPrice: "+$10/yr",
    selected: true
  },
  {
    id: 2,
    title: "Larger Storage" ,
    subtitle: "Extra 1TB of cloud save" ,
    price: "+$2/mo",
    yearlyPrice: "+$20/yr",
    selected: true
  },
  {
    id: 3,
    title: "Customizable Profile" ,
    subtitle: "Custom theme on your profile" ,
    price: "+$2/mo",
    yearlyPrice: "+$20/yr",
    selected: false
  }
])

function submit() {
  emit('change', 'FourthStep')
  subscription.addOn = selectedAddOn.value
  const price = () => {
    subscription.addOnPrice = []
    selectedAddOn.value.forEach(element => {
      for (let i = 0; i < addOns.length; i++) {
        if (addOns[i].title === element && subscription.planType === 'Monthly') {
          subscription.addOnPrice.push(addOns[i].price)
        } else if (addOns[i].title === element && subscription.planType === 'Yearly') {
          subscription.addOnPrice.push(addOns[i].yearlyPrice)
        }
      }
    })
  }
  price()
}

watch(() => props.next, (current) => current ? submit() : '')
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
      :price="subscription.planType === 'Monthly' ? addOn.price : addOn.yearlyPrice " 
      v-model="addOn.selected"
      @update-selected="(e) => {
          if(selectedAddOn.length > 0 && selectedAddOn.includes(e)) {
            selectedAddOn = selectedAddOn.filter((value) => value !== e)
          } else {
            selectedAddOn.push(e)
          }
        }" 
      />
    <div v-if="desktopView" class="grid grid-cols-2 mt-3">
      <FormButton
        @click.prevent="emit('change', 'SecondStep')"
        class="justify-self-start"
        text="Go Back"
        :color="true"
      />
      <FormButton
        @click.prevent="submit()"
        class="justify-self-end"
        text="Next Step"
      />
    </div>
  </form>
</template>
