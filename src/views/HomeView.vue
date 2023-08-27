<template>
   <h3 id="new_title">Best deals in New products</h3>
      <div class="scrollmenu">
        <ProductCardNew
          v-for="product in shuffle(products)" :key="product.name"
          :idx="product.idx"
          :name="product.name"
          :image="product.image"
          :new_price="product.new_price"
        ></ProductCardNew>
      </div>      
      <h3 id="new_title">Best deals in used products</h3>
      <div class="scrollmenu">  
        <ProductCardUsed
          v-for="product in shuffle(products)" :key="product.name"
          :idx="product.idx"
          :name="product.name"
          :image="product.image"
          :used_price="product.used_price"
        ></ProductCardUsed>
      </div>
      <h3 id="new_title">Best deals in refitted products</h3>
      <div class="scrollmenu">
        <ProductCardRefitted
          v-for="product in shuffle(products)" :key="product.name"
          :idx="product.idx"
          :name="product.name"
          :image="product.image"
          :refitted_price="product.refitted_price"
        ></ProductCardRefitted>
      </div>
</template>

<script>
import ProductCardNew from '@/components/ProductCardNew.vue';
import ProductCardRefitted from '@/components/ProductCardRefitted.vue';
import ProductCardUsed from '@/components/ProductCardUsed.vue';

import Products from '@/assets/jsonFiles/Products.json';

export default {
  name: 'HomeView',
  components: {
    ProductCardNew,
    ProductCardRefitted,
    ProductCardUsed
  },
  data() {
    return {
      products: [...Products]
    };
  },
  methods: {
    shuffle(array) {
      console.log(array.legth)
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array
    }
  }
}
</script>

<style scoped>

#new_title{
  margin-left: 15px;
}
  
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
    margin-top: 40px;
  }

</style>
