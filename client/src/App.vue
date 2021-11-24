<template>
  <div class="container">
    <Header @toggle-add-order="toggleAddOrder()" title="Order list" :showAddOrder="showAddOrder"/>
    <AddOrder @new-order="newOrder"  />
    <SearchOrders @order-search='getOrder' @reset-search="handleReset" :searchError="searchError"/>
    <Drop @get-type="sortByType"/>
    <Orders :orders="orders" :sortType="sort"/>
  </div>
</template>

<script>
import './assets/style.css'
import Header from './components/Header';
import Drop from './components/Drop';
import Orders from './components/Orders';
import AddOrder from './components/AddOrder';
import SearchOrders from './components/SearchOrders'

export default {
  name: 'App',
  components: {
    Header,
    AddOrder,
    SearchOrders,
    Drop,
    Orders
  },
  methods: {
    // Gets all the orders from the "Database"
    async getOrders(){
      const res = await fetch('api/')
      const data = await res.json()
      return data
    },

    // Gets single order from the "Database"
    async getOrder(id){
      this.searchError = false;
      const res = await fetch(`api/${id}`)
      const data = await res.json()
      if(!data.err){
        this.orders = [data];
      }else {
        this.searchError = true;
      }
    },
    
    // Place new order in the "Database"
    async newOrder(type){
      const res = await fetch(`api/new`, {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({type: type}),
      })
      const data = await res.json()
      this.orders = [...this.orders, data]
    },

    // Resets app to base functionality
    async handleReset(){
      this.orders = await this.getOrders()
      this.sort = 'all'
    },

    // Handle sort
    sortByType(type){
      this.searchError = false;
      this.sort = type;
    },

    // Was going to make a toggle for the add order form. Maybe next time!
    toggleAddOrder(){
      this.showAddOrder = !this.showAddOrder;
    }
  },
  data() {
    return{
      orders: [],
      sort: 'all',
      searchError: false,
      showAddOrder: false,
    }
  },
  async created(){
    this.orders = await this.getOrders()
  },
  
}
</script>

<style>

</style>
