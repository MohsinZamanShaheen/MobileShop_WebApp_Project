<template>
    <div class="d-flex row general" href >
        <div class="col">
            <img class="img" height="100" v-bind:src="require(`../assets/images/${product.image}`)"/>
        </div>
        <div class="col">
            <router-link :to="'/product/' + product.idx" >
                <h5 class="title"> {{ product.name }} </h5>
            </router-link>
        </div>
        <div class="col">
            <div class="row">
                <div class="col">
                    Price:
                </div>
                <div class ="col price-new">
                    {{vprice}} €
                </div>
            </div>
        </div>
        <div class="col">
            <button type="button" class="btn btn-primary" @click="deleteEntry">Eliminar</button>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'CartItem',
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
        price: {
            type: Number,
            required: false
        }
    },
    data(){
        return {
            product: {
                idx: this.idx,
                name: this.name, 
                image: this.image
            },
            vprice: this.price
        }
    },
    methods: {
        deleteEntry(){
            var index_del = -1
            var cart =  JSON.parse(localStorage.getItem('cart') || '[]')
            for (var i in cart){
                if (cart[i].prod.idx == this.product.idx){
                    index_del = i
                    break;
                }
            }
            if (index_del != -1){
                console.log(index_del)
                cart.splice(index_del, 1)
                localStorage.setItem('cart', JSON.stringify(cart))
                location.reload();
            }
        }
    }

}
</script>
    


<style>

.price-new{
  background-color: #379683;
  border-radius: 7px;
}
.price-new, .price-2ndhand, .price-refitted{
  border-radius: 7px;

}
.general{
    
    margin-left: 10vw;
    margin-right: 10vw;
    border: white;
    margin-left: 15px;
    margin-bottom: 10px;
    filter: drop-shadow(4px 4px 4px #379683);
    padding: 1px;
    align-items: center;
    border-radius: 10px;
    background: #8EE4AF;
}
.title{
    color: #05386B;
    font-weight: 600;
}

.img{
    border: 2px solid #555;
    border-color: #05386B;
    border-radius: 5%;
}
</style>