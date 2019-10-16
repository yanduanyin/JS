<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.key"> {{product.title}} - {{product.price | currency}}
      <button @click="addProductToCart(product)">add product</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    products: state => state.products.all
  }),
  created() {
   this.$store.dispatch('products/getAllProducts') 
  },
  methods: mapActions('cart',[
    'addProductToCart'
  ])
}
</script>
<style>

</style>