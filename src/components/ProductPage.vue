<template>
    <div class="row">
        <div class="col-sm">
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
                <h5>Selecciona una opció de compra:</h5>
            </div>

            <div class = "row" style="margin-top: 2vh;">
                <div class="col-2" style="text-align: end;">
                    New:
                </div>
                <div class ="col">
                    <RouterLink :to="'/choosen/'+ product.idx + '/new'">
                    <a type="button" class="btn-block btn-primary price-new"  style=" text-align: center; max-width: 400px;">{{ prices.new_price }}€</a>
                    </RouterLink>
                </div>
            </div>
            <div class = "row" style="margin-top: 2vh;">
                <div class="col-2" style="text-align: end;">
                    Refurbished:
                </div>
                <div class ="col">
                    <RouterLink :to="'/choosen/'+ product.idx + '/refurbished'">
                    <a type="button" class="btn-block btn-primary price-new" role="button" style=" text-align: center;  max-width: 400px;">{{ prices.refurbished_price }}€</a>
                    </RouterLink>
                </div>
            </div>
            <div class = "row" style="margin-top: 2vh;">
                <div class="col-2" style="text-align: end;">
                    Used:
                </div>
                <div class ="col">
                    <RouterLink :to="'/choosen/'+ product.idx + '/used'">
                    <a type="button" class="btn-block btn-primary price-new" style=" text-align: center;  max-width: 400px;">{{ prices.used_price }}€</a>
                    </RouterLink>
                </div>
            </div>
        </div>
        
    </div>
    <div class="row" style="margin-top: 10vh; margin-left: 5vw;">
        <h3>Especificacions tècniques</h3>
        <p>Aquí aniran les especificacions tèciniqes del fabricant del producte, donant una descripció detallada dels components d'aquest perquè l'usuari, vulgui comprar-lo nou, reacondicionat o de segona mà tingui una bona idea del tipus de producte que anirà a comprar</p>
    </div>
    <div class="container">
        <div class="row-sm comment">
            <div class="col">
                <div class="row-sm">
                        Usuari 1: comprat de segona mà 
                        <div>Valoració:5</div>
                </div>
                <div class="row-sm">
                    Cometari de prova de un usuari content amb el producte
                </div>
            </div>
        </div>
        <div class="row-sm comment">
            <div class="col">
                <div class="row-sm">
                        Usuari 2: comprat de segona mà 
                        <div>Valoració:2</div>
                </div>
                <div class="row-sm">
                    Cometari de prova de un usuari amb alguns problemes amb el producte
                </div>
            </div>
        </div>
        <div class="row-sm comment">
            <div class="col">
                <div class="row-sm">
                        Usuari 3: comprat nou
                        <div>Valoració:4</div>
                </div>
                <div class="row-sm">
                    Cometari de prova de un usuari content amb el producte
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'ProductPage',
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
        description: {
            type: String,
            required: true
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
            }
        }
    }
}

</script>


<style scoped>

#productImage{
    margin-left: 80px;
}



.comment{
  border-radius: 10px;
  background-color: #379683;
  margin-top: 10px;
  align-self: center;
  
}
#productImage{
    border: 2px solid #555;
    border-color: #05386B;
    border-radius: 5%;
}

</style>