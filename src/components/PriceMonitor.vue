<template>
    <div class="price" :class="{ noChange: isNoChange, priceUp: isUp, priceDown: isDown }">
        <!-- <div v-for="data in price" :key="data.id">
            <h2>Current price: {{ data.usd }} USD</h2>
        </div> -->
        <h2>Current price: {{ price_litecoin }} USD</h2>
    </div>
</template>

<script>
import { ref } from 'vue'



export default {
    name: 'PriceMonitor',
    props: ['price', 'price_litecoin'],
    watch: {
        price_litecoin: function(newValue, oldValue) {
            this.$forceUpdate()

            if (newValue > oldValue) {
                this.isUp = true;
            }
            else if (newValue  < oldValue) {
                this.isDown = true;
            }
            else {
                this.isNoChange= true;
            }
            console.log(oldValue + " -> " + newValue)
        }
    },
    setup() {
        const isNoChange = ref();
        const isUp = ref();
        const isDown = ref();

        setInterval(() => {
            isNoChange.value = false;
            isUp.value = false;
            isDown.value = false;
        }, 1000)

        return { isNoChange, isUp, isDown }
    }
}
</script>

<style>
.noChange{
    background: gray;
}
.priceUp{
    background: green;
}
.priceDown{
    background: red;
}
</style>