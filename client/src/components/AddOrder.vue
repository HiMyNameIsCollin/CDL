<template>
  <form @submit='onSubmit' class='addOrder'>
      <h3> Create new order </h3>
      <select name="addOrderType" id="addOrderType">
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
      </select>

      <button name='addOrderBtn'>Add order</button>

  </form>
</template>

<script>
export default {
    name: 'AddOrder',
    methods: {
        onSubmit(e){
            e.preventDefault()
            const type = document.getElementById('addOrderType').value
            console.log(type)
            this.$emit('new-order', type)
        }
    }
}
</script>

<style>

</style>