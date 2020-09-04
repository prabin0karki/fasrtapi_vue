<template>
    <div class="vue-tempalte">
      <div class="row">
 <div class="col-sm-4"></div>
 <div class="col-sm-4">
   <form v-on:submit.prevent="onSubmit">
       <h3>Sign In</h3>

       <div class="form-group">
           <label>Email address</label>
           <input type="email" v-model="username" class="form-control form-control-lg" />
       </div>

       <div class="form-group">
           <label>Password</label>
           <input type="password" v-model="password" class="form-control form-control-lg" />
       </div>

       <button class="btn btn-dark btn-lg btn-block" @click="processLogin">Sign In</button>

       <p class="forgot-password text-right mt-2 mb-4">
           <router-link to="/signup">Signup</router-link>
       </p>

   </form>
 </div>
 <div class="col-sm-4"></div>
</div>

    </div>
</template>


<script>
import { mapState,mapMutations } from 'vuex';

const axios = require('axios');
export default {
  name: "LoginPage",
  computed: {
    ...mapState(['token'])
  },
  data() {
    return {
      username: '',
      password: '',
      text: "Login Form",
      available: false,
      show: false,
      errors: {'auth':[]},
      disabledLogin: true
    }
  },

  created(){
    var token = window.localStorage.getItem("token");
    if (token != undefined && token != ""){
      this.$router.replace("/home");
    }
  },

  methods:{
    ...mapMutations([
      'setToken'
    ]),

    processLogin(){
      const formData = new FormData();
      formData.append('username', this.username);
      formData.append('password', this.password);
      axios.post('http://localhost:8000/token',formData,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }}).then(response=>{
        window.localStorage.setItem("token", response.data.access_token);
        this.setToken(response.data.access_token);
        axios.defaults.headers.common['authorization']  = "Bearer"+response.data.access_token
        this.$router.replace("/home");
      })
      .catch(error => {
        if(error.response){
          this.errors['auth'] = ["Invalid username/password."]
          alert("Invalid username/password.")
        }
        this.errored = true;
      })
      }
    }
};
</script>
</script>
