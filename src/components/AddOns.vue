<script setup lang="ts">
const props = defineProps<{
    id: number,
    title: string
    subtitle: string
    price: string
    modelValue: boolean
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'updateSelected', value: string): void
}>()

function input() {
  emits('update:modelValue', (<HTMLInputElement>document.getElementById(String(props.id))).checked)
  emits('updateSelected', props.title)
}
</script>

<template>
    <label
      class="grid grid-cols-[1fr,3fr,1fr] lg:grid-cols-[1fr,6fr,1fr] cursor-pointer mb-3 items-center p-3 lg:p-5 border rounded-lg"
      :class="modelValue ? 'border-PurplishBlue bg-Magnolia' : 'border-LightGray'"
    >
      <input
        type="checkbox"
        :id="String(id)"
        :checked="modelValue"
        @change="input()"
        class="appearance-none grid cursor-pointer place-items-center justify-self-start w-5 h-5 border 
            border-LightGray rounded-md before:w-2.5 before:h-2.5 before:shadow-White 
            before:bg-White before:inset-full before:absolute before:top-1 before:left-1 before:scale-0 
            checked:bg-PurplishBlue checked:before:scale-100 transition-all"
      />
      <div class="-ml-3">
        <h5 class="font-bold">{{ title }}</h5>
        <p class="text-CoolGray text-xs lg:text-base">{{ subtitle }}</p>
      </div>
      <p class="justify-self-end text-PurplishBlue text-xs lg:text-base">{{ price }}</p>
    </label>
</template>

<style scoped>
input::before {
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
</style>