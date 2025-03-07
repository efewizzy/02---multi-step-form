<script setup lang="ts">
import PageTitle from '../PageTitle.vue';
import FormInput from '../FormInput.vue';
import FormButton from '../FormButton.vue';
import { reactive, watch } from 'vue';
import {useVuelidate} from '@vuelidate/core';
import { required, helpers, email } from '@vuelidate/validators';
import { subscription, desktopView } from '@/store/store';

const emit = defineEmits<{
    (e: 'change', value: string): void
}>()

const props = defineProps<{
    next: boolean
}>()

const customRequired = { required: helpers.withMessage('This field is required', required) }

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
    v$.value.$touch()
    v$.value.$validate
    if(!v$.value.$error) {
        emit('change', 'SecondStep')
        subscription.name = details.name
        subscription.email = details.email
        subscription.number = details.number
        details.name = ''
        details.email = ''
        details.number = ''
        console.log(subscription)
    }
    v$.value.$reset
}

watch(() => props.next, (current) => current ? submit() : '')
</script>

<template>
        <PageTitle title="Personal Info" subtitle="Please provide your name, email address, and phone number" />
        <form @submit.prevent="submit()" class="grid">
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
            <FormButton v-if="desktopView" class="justify-self-end" text="Next Step" />
        </form>
</template>