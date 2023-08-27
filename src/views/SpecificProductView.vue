<template>
    <div class="page">
     <SpecificProductPage 
        :idx="this.product.idx"
        :name="this.product.name"
        :description="this.product.description"
        :new_price="this.product.new_price" 
        :refurbished_price="this.product.refitted_price" 
        :used_price="this.product.used_price" 
        :type="this.$route.params.type" 
        :image="product.image"
        :new_sellers="this.product.new_sellers"
        :refurbished_sellers="this.product.refurbished_sellers"
        :used_sellers="this.product.used_sellers"
        ></SpecificProductPage>
    </div>
</template>


<script>
import SpecificProductPage from "@/components/SpecificProductPage.vue";
import Products from "@/assets/jsonFiles/Products.json"
  
export default {
components: {
    SpecificProductPage
},
data(){
        return {
            product: Products[this.$route.params.idx]
        }
    }
}
</script>
  