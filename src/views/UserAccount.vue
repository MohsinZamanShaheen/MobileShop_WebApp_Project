<template>
  <div class="container">
    <div class="tab-content">
      <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form>

          <p class="text-center"><b>Register</b></p>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="loginName" class="form-control" />
            <label class="form-label" for="loginName">Email or username</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="loginPassword" class="form-control" />
            <label class="form-label" for="loginPassword">Password</label>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4" style="background: #05386B;" @click="goToMainPage">Sign in</button>

        </form>
      </div>
    </div>
  </div>
  </template>
  
  <script>
import router from '@/router';

  export default {
    name: 'AccountPage',
    data() {
      return {
        loginForm: {
          email: '',
          password: ''
        }
      };
    },
    methods: {
      login() {
        // Perform login logic, e.g., make an API call to authenticate the user
        // and handle the response accordingly.
        // Example code:
        // Your login API call here
        // axios.post('/api/login', this.loginForm)
        //   .then(response => {
        //     // Handle successful login
        //     // Redirect to another page or perform necessary actions
        //   })
        //   .catch(error => {
        //     // Handle login error
        //   });
        console.log('Logging in...', this.loginForm);
      },
      goToMainPage(){
        router.push('/')
      }
    }
  };
  </script>
  

<style scoped>
.container{
  max-width: 30vw;
  margin-top: 2vh;
}

</style>