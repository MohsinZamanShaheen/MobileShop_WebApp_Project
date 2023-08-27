<template>
  <div class="container">
    <div class="back-arrow" @click="goBack">
      <i class="fa fa-arrow-left"></i> Back
    </div>
    <h1>Dades per dur a terme la compra</h1>
    <form @submit.prevent="showModal">
      <div class="form-group">
        <label for="address">Nom:</label>
        <input type="text" class="form-control" id="address" name="address" required>
      </div>
      <div class="form-group">
        <label for="name">Cognom:</label>
        <input type="text" class="form-control" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="surname">Adreça:</label>
        <input type="text" class="form-control" id="surname" name="surname" required>
      </div>
      <div class="form-group">
        <label for="credit-card">Dades Bancaries:</label>
        <input type="text" class="form-control" id="credit-card" name="credit-card" required>
      </div>
      <button type="submit" class="btn btn-primary">Finalitzar la compra</button>
    </form>
    <div class="modal-wrapper" v-show="isModalVisible">
      <ModalComp @close="closeModal" />
    </div>
  </div>
    
 </template>
 
 <script>
   import ModalComp from '@/components/ModalComp.vue';
 
 export default {
   name: 'ShoppingCart',
   components: {
    ModalComp,
   },
  data() {
     return {
       products: this.cart,
       filtered: [],
       search: this.$route.params.search,
       isModalVisible: false
     };
   },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    goBack() {
      this.$router.go(-1);
    }
  }

 }
 </script>
 
 <style >
   
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

.container{
  max-width: 40vw;
  margin-top: 15vh;
} 
.back-arrow {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #007bff;
  font-size: 16px;
}

.back-arrow i {
  margin-right: 5px;
}


</style>