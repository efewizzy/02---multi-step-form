import { reactive, ref } from "vue"

const MOBILE_BREAKPOINT = 1024; // tailwind: lg

const width = ref(document.body.offsetWidth)

const desktopView = ref(width.value >= MOBILE_BREAKPOINT)

window.addEventListener("resize", function () {
    width.value = this.document.body.offsetWidth;
    desktopView.value = width.value >= MOBILE_BREAKPOINT
})

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
    total,
    desktopView
}