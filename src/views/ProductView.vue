<template>
  <div class="about">
    <ProductPage :idx="product.idx" :name="product.name" :image="product.image"
    :new_price="product.new_price" :refurbished_price="product.refitted_price" :used_price="product.used_price" :description="product.description"></ProductPage>
  </div>
</template>
<script>
  import ProductPage from "@/components/ProductPage.vue";
  import Products from "@/assets/jsonFiles/Products.json"

  export default {
  components: {
    ProductPage
  },
  data() {
    return {
      product: Products[this.$route.params.idx]
    }
  }
}
</script>
