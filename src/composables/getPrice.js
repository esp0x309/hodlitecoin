import { ref } from 'vue'

const getPrice = () => {
    const price = ref([])
    const error = ref(null)
    const price_litecoin = ref()

    const loadPrice = async () => {
        try {
            let data = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd')
            if (!data.ok) {
                console.log('no data available')
            }
            price.value = await data.json()
            price_litecoin.value = price.value.litecoin.usd 
            console.log(price_litecoin.value)
        }
        
        catch(err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    return { price, loadPrice, price_litecoin }
}

export default getPrice