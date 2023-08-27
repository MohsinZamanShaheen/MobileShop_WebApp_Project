<template>
  <h3>Shopping Cart</h3>

      <CartItem
      v-for="product in cart" :key="product.name"
      :idx="product.prod.idx"
      :name="product.prod.name"
      :image="product.prod.image"
      :price="product.price"
      ></CartItem>
      <p style="text-align: center;">Total Price: {{ totalPrice }}€</p>
      <RouterLink to="/sellform" style="align-self: center;">
        <a type="button" class="btn-block btn-primary endPurchase">Finalitza Compra</a>
      </RouterLink>
</template>

<script>

import CartItem from '@/components/CartItem.vue';

export default {
 name: 'ShoppingCartView',
 components: {
   CartItem
 },
 computed: {
  cart() {
      return JSON.parse(localStorage.getItem('cart') || '[]')
  },
  totalPrice() {
    var total_price = 0
    var cart =  JSON.parse(localStorage.getItem('cart') || '[]')
    for ( var p in cart){
      console.log(p)
      total_price += cart[p].price
    }
    return total_price
  }
 },
 methods: {
  endPurchase() {
    localStorage.setItem('cart', [])
  }
 }
}
</script>

<style scoped>
 
div.scrollmenu div {
 display: inline-block;
 color: black;
 text-align: center;
 padding: 20px;
 text-decoration: none;
}

div.scrollmenu {
   overflow: auto;
   white-space: nowrap;
   color: #DD6E42;
   margin-bottom: 5vh;
   scrollbar-width: none;
   margin-top: 40px;
 }

.endPurchase{
  text-align: center;
  max-width: 400px;
  background-color: #05386B; 
  border-radius: 5px;
  margin-left: 20px;
  padding: 10px;
}

</style>