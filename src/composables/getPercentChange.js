import { ref } from 'vue'

const getPercentChange= () => {
    const percent_change = ref([])
    const error = ref(null)

    const loadPercentChange = async () => {
        try {
            let data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=litecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C1y')
            if (!data.ok) {
                console.log('no data available')
            }
            percent_change.value = await data.json()
        }
        
        catch(err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    return { percent_change, error, loadPercentChange }
}

export default getPercentChange