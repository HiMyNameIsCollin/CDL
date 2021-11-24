<template>
  <form @submit='onSubmit' class='searchOrders'>
        <label for='idSearch'> Search for ID: </label>  
        <input id='idSearch' name='idSearch' type='number'/>
        <button> Search </button>
        <button @click="onReset"> Reset </button>
        <p v-show="searchError" class='searchError'>
            Nothing matches your query
        </p>
        
  </form>
</template>

<script>
export default {
    name: 'SearchOrders',
    props: {
        searchError: Boolean,
    },
    methods: {
        onSubmit(e){
            e.preventDefault()
            const val = document.getElementById('idSearch')
            console.log(val.value)
            this.$emit('order-search', val.value)
        },

        onReset(e){
            e.preventDefault()
            this.$emit('reset-search')
        }
    }
}
</script>

<style>

</style>