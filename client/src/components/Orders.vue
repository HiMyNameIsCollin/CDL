<template>
  <div>
    <div class='grid'>
        <p>
            order_id
        </p>
        <p>
            order_number
        </p>
        <p>
            type
        </p>
        <p>
            time
        </p>
    </div>
    <div v-for="order in orders" :key='order.order_id'>
      <div v-show="order.type === this.sortType || this.sortType === 'all'">
          <Order :order='order'/>
      </div>
    </div>
  </div>
</template>

<script>
import Order from './Order'
export default {
    name: 'Orders',
    props: {
        orders: Array,
        sortType: String,
    },
    components: {
        Order
    }
}
</script>
