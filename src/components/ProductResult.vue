<template>
    <div class="row general" href >
        <div class="col-2">
            <img class="img" height="100" v-bind:src="require(`../assets/images/${product.image}`)"/>
        </div>
        <div class="col-8">
            <router-link :to="'/product/' + product.idx" >
                <h5 class="title"> {{ product.name }} </h5>
            </router-link>
        </div>
        <div class="col-2">
            <div class="row">
                <div class="col">
                    New:
                </div>
                <a class ="col price-new" :href="'/choosen/' + this.product.idx + '/new'">
                    {{prices.new_}} €
                </a>
            </div>
            <div class="row">
                <div class="col">
                    Refitted:
                </div>
                <a class ="col price-new" :href="'/choosen/' + this.product.idx + '/refurbished'">
                    {{prices.refitted_}} €
                </a>
            </div>
            <div class="row">
                <div class="col">
                    Used:
                </div>
                <a class ="col price-new" :href="'/choosen/' + this.product.idx + '/used'">
                    {{prices.used_}} €
                </a>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'ProductResult',
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
            type: Number,
            required: false
        },
        refitted_price: {
            type: Number,
            required: false
        },
        used_price: {
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
            prices: {
                new_: this.new_price,
                refitted_: this.refitted_price, 
                used_: this.used_price
            }
        }
    }

}
</script>
    


<style>

.price-new{
  background-color: #379683;
  color: #05386B;
  text-decoration: none;
  border-radius: 7px;
  margin: 4px;
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