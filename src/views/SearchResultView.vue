<template>
    <h3>Results</h3>
        <ProductResult
        v-for="product in filtered" :key="product.name"
        :idx="product.idx"
        :name="product.name"
        :image="product.image"
        :new_price="product.new_price"
        :refitted_price="product.refitted_price"
        :used_price="product.used_price"
        ></ProductResult>
 </template>
 
 <script>
 
 import Products from '@/assets/jsonFiles/Products.json';
 import ProductResult from '@/components/ProductResult.vue';
 
 export default {
   name: 'SearchView',
   components: {
     ProductResult
   },
   data() {
     return {
       products: Products,
       filtered: [],
       search: this.$route.params.search
     };
   },
   created () {
    if (this.search == '_'){
      this.filtered = this.products
    }
    else{
      if (this.search == 'tv_menu'){
        this.filtered.push(this.products[0])
        this.filtered.push(this.products[3])
      }
      if (this.search == 'smartphone_'){
        this.filtered.push(this.products[2])
        this.filtered.push(this.products[14])
      }
      if (this.search == 'console_menu'){
        this.filtered.push(this.products[13])
      }
      if (this.search == 'speakers'){
        this.filtered.push(this.products[4])
      }
      if (this.search == 'home_menu'){
        this.filtered.push(this.products[11])
        this.filtered.push(this.products[12])
        this.search = 'lavadora'
      }
      if (this.search == 'computer_menu'){
        this.filtered.push(this.products[1])
        this.filtered.push(this.products[6])
      } 
      for (const product of this.products){
        if (product.name.toUpperCase().includes(this.search.toUpperCase())) {
          this.filtered.push(product)
        }
      }
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
 
 </style>
 