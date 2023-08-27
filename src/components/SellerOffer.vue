<template>
    <div class="row comment">
        <div class="col-3">
            <img style="max-height:100%; max-width: 100px;" src="@/assets/images/userIcon.png"/>
        </div>
        <div class="col" style="">
                {{ user.name }}:  Valoració del usuari: {{ user.valoration }}
                <div>Preu: {{ sellprice }}€</div>
            {{ sellcomment }}
        </div>
        <div class="col-3" style=" align-self: center;">
            <button type="button"  @click="addCart" class="btn btn-primary" style="background: #05386B;">Comprar</button>
        </div>
    </div>
</template>
<script>
import Products from '@/assets/jsonFiles/Products.json';
//import ShoppingCartView from '@/views/ShoppingCartView.vue';
export default {
  name: 'SellerOffer',
  props: {
        username: {
            type: String,
            required: true
        },
        user_valoration: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        prod_idx: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            user: {
                name: this.username,
                valoration: this.user_valoration,
                idx: this.prod_idx
            },
            sellprice: this.price,
            sellcomment: this.comment
        }
    },
    methods: {
    addCart(){
        var prod = Products[this.prod_idx]
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
        console.log(cartItems)
        var elem = {prod: prod, price: this.sellprice, user: this.user}
        cartItems.push(elem)
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }
  }
}

</script>
<style scoped>
.comment{
  border-radius: 10px;
  background-color: #379683;
  margin-top: 10px;
  align-self: center;
  width: 50vw;
  max-height: min-content;
  
}

#productImage{
    border: 2px solid #555;
    border-color: #05386B;
    border-radius: 5%;
}
</style>