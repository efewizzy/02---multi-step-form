import { reactive } from "vue"

const subscription = reactive({
    name: '',
    email: '',
    number: '',
    plan: '',
    planPrice: '',
    planType: '',
    addOn: [''],
    addOnPrice: [''],
    totalBill: ''
})

const total = () => {
    const totalPrice = subscription.planPrice.match(/\d/g)
    subscription.addOnPrice.forEach(price => {
        const testPrice = price.match(/\d/g)
    });
}

export {
    subscription,
    total
}