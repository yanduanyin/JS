<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList />
    <br>
    <ShoppingCart />
    <router-view/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'

export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style>

</style>
