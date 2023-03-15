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
    let totalPrice = parseInt(subscription.planPrice.replace(/\D/g, ''))
    subscription.addOnPrice.forEach(price => {
        let testPrice = parseInt(price.replace(/\D/g, ''))
        totalPrice += testPrice
    })
    console.log(totalPrice)
    subscription.totalBill = `$${totalPrice}/${subscription.planType === 'Monthly' ? 'mo' : 'yr' }`
}

export {
    subscription,
    total
}