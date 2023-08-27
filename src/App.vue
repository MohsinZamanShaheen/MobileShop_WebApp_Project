<template>
  <nav>
    <HeaderMultimarket v-if="!['sellform'].includes($route.name)"/>
  </nav>
  <router-view/>
</template>

<script>
import HeaderMultimarket from "./components/HeaderMultimarket.vue";

export default({
  components: {
    HeaderMultimarket
}
})
</script>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #05386B
}

</style>
