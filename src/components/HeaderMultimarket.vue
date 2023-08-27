<template>
<div>
    <nav class="navbar gen-header">
      <RouterLink :to="'/'">
        <img class="logoClass" src="../assets/logo.png" >
      <a class="navbar-brand" id="logo"><u>MultiMarket</u></a>
      </RouterLink>
      <form class="form-inline my-2 my-lg-0 "  :action="'/searchresult/' + count">
          <input id="result" class="form-control mr-sm-2" style="width: 50vw" type="search" placeholder="Search" @input="formChanged" aria-label="Search">
          <button id="search" class="btn btn-outline-success my-2 my-sm-0 " style="color: #05386B; border-color: #05386B;" type="submit">Search</button>
        </form>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="/shoppingcart">
            <img class="cartIcon" src="../assets/images/shopping-cart-outline.svg" alt="">
          </a>
        </li>
      </ul>
    </nav>

    <nav class="navbar justify-content-center sec-navbar">
      <ul class="nav navPages">
        <li class="nav-item">
          <a class="nav-link active" href="/searchresult">Offers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Gifts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FAQs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/account">Account</a>
        </li>
      </ul>
    </nav>

    <nav class="navbar navbar-expand-lg third-navbar">
    
        <ul class="navbar-nav">
          <li class="nav-item">
          <a class="nav-link" href="/searchresult/computer_menu">Computers</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/searchresult/lavadora">Washing Machines</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/searchresult/tv_menu">Televisions</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/searchresult/smartphone_">SmartPhones</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/searchresult/console_menu">Consoles</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/searchresult/headphone">Headphones</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/searchresult/speakers">Speakers</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/searchresult/watch">Watches</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/searchresult/home_menu">Home Appliances</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/searchresult/_">Others</a>
          </li>
        </ul>
    </nav>
</div>
</template>



<script>

export default {
  name: 'HeaderMultimarket',
  data() {
    return {
      query: ''
    }
  },
  methods: {
    searchResult() {
      
      var s = document.getElementById('search').value
      console.log(s)
      this.query = s
    },
    formChanged(event) {
      this.query = event.target.value
      console.log(this.query)
    }
  },
  computed: {
    count() {
      return this.query;
    },
  }
}

</script>


<style scoped>
.navbar{
  background-color: #379683;
}

.navbar a {
  color: aliceblue;
}

.dropdown-menu a{
  color: #000;
}

.navbar-nav .nav-item{
  margin-left: 2vw;
}

.third-navbar{
  margin-bottom: 5vh;
}

.form-inline .form-control{
  width: 800px;
  border-radius: 30px;
}

.form-inline .btn{
  width: 100px;
  border-radius: 30px;
}

#logo{
  font-family: Impact;  
  
}

.logoClass{
  max-width: 40px;
  max-height: 40px;
}

div.scrollbar ::-webkit-scrollbar{
  display: none;
}
</style>