<template>
  <div class="home">
    <h1 class="title">HODLitecoin</h1>
    <PriceMonitor :price="price" :price_litecoin="price_litecoin"/>
    <PercentMonitor :percent_change="percent_change" />
    <Calculator />
  </div>
</template>


<script>
import PriceMonitor from  '../components/PriceMonitor.vue'
import PercentMonitor from  '../components/PercentMonitor.vue'
import Calculator from  '../components/Calculator.vue'

import getPrice from '../composables/getPrice'
import getPercentChange from '../composables/getPercentChange'

export default {
  name: 'Home',
  components: {
    PriceMonitor,
    PercentMonitor,
    Calculator

  },
  setup() {
    const intervalPrice= setInterval(() => {
      loadPrice()
    }, 5000)

    const intervalPercent= setInterval(() => {
      loadPercentChange()
    }, 5000)

    const { price, price_litecoin, error, loadPrice } = getPrice()
    loadPrice()

    const { percent_change, loadPercentChange } = getPercentChange()
    loadPercentChange()

    return { price, price_litecoin, percent_change, error }
  }
}
</script>
<style>
.title {
  color: #818181;
  letter-spacing: 2px;
}
.changeUp {
  background: greenyellow;
}
.changeDown {
  background: red;
}
</style>