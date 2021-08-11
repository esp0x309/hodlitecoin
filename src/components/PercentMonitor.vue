<template>
    <div class="change">
        <div v-for="data in percent_change" :key="data.id">
            <div :class="{ 'negative': (data.price_change_percentage_1h_in_currency < 0), 'positive': (data.price_change_percentage_1h_in_currency > 0) }">
                <p> change (1h): {{ data.price_change_percentage_1h_in_currency.toFixed(2) }}% </p>
            </div>
            <div :class="{ 'negative': (data.price_change_percentage_24h_in_currency < 0), 'positive': (data.price_change_percentage_24h_in_currency > 0) }">
                <p>change (24h): {{ data.price_change_percentage_24h_in_currency.toFixed(2) }}% </p>
            </div>
            <div :class="{ 'negative': (data.price_change_percentage_7d_in_currency < 0), 'positive': (data.price_change_percentage_7d_in_currency > 0) }">
                <p>change (7 days): {{ data.price_change_percentage_7d_in_currency.toFixed(2)  }}% </p>
            </div>
            <div :class="{ 'negative': (data.price_change_percentage_14d_in_currency < 0), 'positive': (data.price_change_percentage_14d_in_currency > 0) }">
                <p>change (14 days): {{ data.price_change_percentage_14d_in_currency.toFixed(2)  }}% </p>
            </div>
            <div :class="{ 'negative': (data.price_change_percentage_30d_in_currency < 0), 'positive': (data.price_change_percentage_30d_in_currency > 0) }">
                <p>change (30 days): {{ data.price_change_percentage_30d_in_currency.toFixed(2)  }}% </p>
            </div>
            <div :class="{ 'negative': (data.price_change_percentage_1y_in_currency < 0), 'positive': (data.price_change_percentage_1y_in_currency > 0) }">
                <p>change (1 year): {{ data.price_change_percentage_1y_in_currency.toFixed(2)  }}% </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PercentMonitor",
    props: ['percent_change'],
    watch: {
        percent_change: function() {
            this.$forceUpdate()
        }
    }
}
</script>

<style>
.negative {
    color: red;
}
.positive {
    color: green;
}
</style>