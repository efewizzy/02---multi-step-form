<script setup lang="ts">
import PageTitle from '../PageTitle.vue';
import FormInput from '../FormInput.vue';
import FormButton from '../FormButton.vue';
import { ref, reactive } from 'vue';
import {useVuelidate} from '@vuelidate/core';
import { required, helpers, email, numeric } from '@vuelidate/validators';

const emit = defineEmits<{
    (e: 'change', value: string): void
}>()

const customRequired = { required: helpers.withMessage('This field is required', required) }

const name = ref('')

const details = reactive({
    name: '',
    email: '',
    number: ''
})

const rules = {
    name: customRequired,
    email: { ...customRequired, email: helpers.withMessage('Enter a valid email address', email) },
    number: { ...customRequired }
}

const v$ = useVuelidate(rules, details)

details.name = v$.value.name.$model
details.email = v$.value.email.$model
details.number = v$.value.number.$model

const submit = () => {
    v$.value.$validate
    if(!v$.value.$error) {
        details.name = ''
        details.email = ''
        details.number = ''
        emit('change', 'SecondStep')
    }
    v$.value.$reset
}
</script>

<template>
        <PageTitle title="Personal Info" subtitle="Please provide your name, email address, and phone number" />
        <form action="" @submit.prevent="submit()" class="grid">
            <FormInput 
                title="Name" 
                type="text" 
                text="e.g. Stephen King" 
                v-model="v$.name.$model" 
                :error="v$.name.$errors" 
            />
            <FormInput 
                title="Email Address" 
                type="email" 
                text="e.g. stephenking@lorem.com" 
                v-model="v$.email.$model" 
                :error="v$.email.$errors" 
            />
            <FormInput 
                title="Phone Number" 
                type="text" 
                text="e.g. +1 234 567 890" 
                v-model="v$.number.$model" 
                :error="v$.number.$errors" 
            />
            <FormButton class="justify-self-end" text="Next Step" />
        </form>
</template>