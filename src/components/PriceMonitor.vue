<template>
    <div class="price">
        <div v-for="data in price" :key="data.id">
            <h2>Current price: {{ data.usd }} USD</h2>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PriceMonitor',
    props: ['price'],
    watch: {
        price: function() {
            this.$forceUpdate()
        }
    }
}
</script>

<style>

</style>