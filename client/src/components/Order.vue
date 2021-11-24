<template>
  <div class='order grid'>
      <p>
          {{order.order_id}}
      </p>
      <p>
          {{order.order_number}}
      </p>
      <p>
          {{order.type}}
      </p>
      <p>
          {{
              `${new Date(order.created).toLocaleDateString("en-US")},
              ${new Date(order.created).toLocaleTimeString("en-US")}`
          
          }}
      </p>
  </div>
</template>

<script>
export default {
    name: 'Order',
    props: {
        order: Object
    }
}
</script>

