<template>
    <div class="card card-body">
        <img class="img" height="300" v-bind:src="require(`../assets/images/${product.image}`)"/>
        <router-link :to="'product/' + product.idx" >
            <h5 class="title"> {{ product.name }} </h5>
        </router-link>
        <div class="container">
            <div class="row d-flex">
                <div class="col">
                    2nd Hand:
                </div>
                <div class ="col price-new">
                    {{prices.used}}€
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'ProductCardUsed',
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
        used_price: {
            type: String,
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
            prices: {
                used: this.used_price, 
            }
        }
    }

}
</script>

<style>
.card{
 border: white;
 margin-left: 15px;
 margin-bottom: 10px;
 filter: drop-shadow(4px 4px 4px #379683);
 padding: 1px;
 align-items: center;
 width: fit-content;
 border-radius: 5%;
 background: #8EE4AF;
}
.price-new{
  background-color: #379683;
  border-radius: 7px;
}
.price-new, .price-2ndhand, .price-refitted{
  border-radius: 7px;

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