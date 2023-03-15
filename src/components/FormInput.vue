<script setup lang="ts">
const props = defineProps<{
    title: string
    text: string
    type: string
    error: Array<any>
    modelValue: string
}>()

const emit = defineEmits<{
    (e: "update:modelValue", value: any): void;
}>()
</script>

<template>
    <div class="grid grid-cols-2">
        <h5 class="mb-2 text-sm">{{ title }}</h5>
        <p v-if="error.length > 0" v-for="err in error" class="justify-self-end text-StrawberryRed font-bold" >
           {{ err.$message }}
        </p>
    </div>
    <input :type="type" :placeholder="text" :value="modelValue"
        @input="emit('update:modelValue', (<HTMLTextAreaElement>$event.target).value)"
        class="p-3 mb-5 border border-LightGray rounded-lg w-full  focus:outline-none cursor-pointer font-bold" 
        :class="error.length > 0 ? 'focus:border-StrawberryRed border-StrawberryRed' : 'focus:border-PurplishBlue'"
    />
</template>
