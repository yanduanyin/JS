<template>
  <div>
    <h2>you cart</h2>
    <p v-show="!products.length">
      <i></i>
    </p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.title}} - {{product.price | currency}} X {{product.quantity}}
      </li>
    </ul>
    <p>Total: {{total}}</p>
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
  computed: {
   ...mapState({
     checkoutStatus: state => state.cart.checkoutStatus
   }),
   ...mapGetters('cart', {
     products: 'cartProducts',
     total: 'cartTotalPrice'
   })
  }
}
</script>
<style>

</style>