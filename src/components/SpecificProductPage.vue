<template>
    <div class="row">
        <div class="col">
            <img id="productImage" height= 400 v-bind:src="require(`../assets/images/${product.image}`)" style="align-self: center;"/>
        </div>
        <div class="col">
            <div class="row">
                <h1>{{ product.name }}</h1>
            </div>
            <div class="row">
                <p style="margin-right: 5vw;">{{ product.description }}</p>
            </div>
            <div class="row" style="margin-top: 5vh;">
                <h5>Millor preu:</h5>
            </div>

            <div class = "row" style="margin-top: 2vh;">
                <div class ="col">
                    <h2>{{ prices[this.type+'_price'] }}€</h2>
                    
                </div>
            </div>
        </div>
    </div>
    <div class="row" style="margin-top: 10vh; margin-left: 5vw;">
        <h3>Especificacions tècniques</h3>
        <p>Aquí aniran les especificacions tèciniqes del fabricant del producte, donant una descripció detallada dels components d'aquest perquè l'usuari, vulgui comprar-lo nou, reacondicionat o de segona mà tingui una bona idea del tipus de producte que anirà a comprar</p>
    </div>

    <div class="container">
        <SellerOffer
        v-for="p in sellers[this.type]"
        :key="p.name"
        :username="p.username"
        :user_valoration="p.valoration"
        :price="p.price"
        :comment="p.comment"
        :prod_idx="this.product.idx"
        @click="showModal"
        ></SellerOffer>
    </div>
    <ModalProd
    v-show="isModalVisible"
    @close="closeModal"/>
</template>

<script>
import SellerOffer from './SellerOffer.vue';
import ModalProd from './ModalProd.vue';

export default {
  name: 'SpecificProductPage',
  components: {
    SellerOffer,
    ModalProd
  },
  props: {
        idx: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        new_price: {
            type: String,
            required: true
        },
        refurbished_price: {
            type: String,
            required: true
        },
        used_price: {
            type: String,
            required: true
        },
        
        type: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        new_sellers:{
            type: FileList,
            required:true
        },
        refurbished_sellers:{
            type: FileList,
            required:true
        },
        used_sellers:{
            type: FileList,
            required:true
        }
    },
    data(){
        return {
            product: {
                idx: this.idx,
                name: this.name, 
                image: this.image,
                description: this.description        
            },
            prices: {
                new_price: this.new_price, 
                refurbished_price:this.refurbished_price,
                used_price:this.used_price
            },
            sellers: {
                new: this.new_sellers,
                refurbished: this.refurbished_sellers,
                used: this.used_sellers
            },
            isModalVisible: false
        }
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
}

</script>

<style scoped>

#productImage{
    margin-left: 80px;
}

#productImage{
    border: 2px solid #555;
    border-color: #05386B;
    border-radius: 5%;
}


</style>