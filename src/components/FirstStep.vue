<script setup lang="ts">
import PageTitle from './PageTitle.vue';
import FormInput from './FormInput.vue';
import { ref, reactive } from 'vue';
import FormButton from './FormButton.vue';

const name = ref('')

const details = reactive({
    name: '',
    email: '',
    number: ''
})


</script>

<template>
    <div class="m-auto mx-20">
        <PageTitle title="Personal Info" subtitle="Please provide your name, email address, and phone number" />
        <form action="" class="grid">
            <FormInput 
                title="Name" 
                type="text" 
                text="e.g. Stephen King" 
                v-model="details.name" 
            />
            <FormInput 
                title="Email Address" 
                type="email" 
                text="e.g. stephenking@lorem.com" 
                v-model="details.email" 
            />
            <FormInput 
                title="Phone Number" 
                type="text" 
                text="e.g. +1 234 567 890" 
                v-model="details.number" 
            />
            <FormButton class="justify-self-end" text="Next Step" />
        </form>
    </div>
</template>