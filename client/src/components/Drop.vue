<template>
    <div class='drop'>
        <label for="orderSelect">Type:</label>
        <select v-on:change='(e) => onSelect(e)' name="orderSelect" id="orderSelect">
            <option value="all">All</option>
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
        </select>
    </div>
</template>

<script>

export default {
    name: "Drop",
    methods: {
        onSelect(e) {
            const input = e.target.value
            this.$emit('get-type', input)
        }
    }
}
</script>