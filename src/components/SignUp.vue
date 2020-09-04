<template>
    <div class="vue-tempalte">
      <div class="row">
 <div class="col-sm-4"></div>
 <div class="col-sm-4">
   <form v-on:submit.prevent="RegisterForm">
       <h3>Sign Up</h3>
       <div class="form-group">
           <label>First Name</label>
           <input type="text" v-model="first_name" class="form-control form-control-lg" />
           <span v-if="errors.first_name" style="color:red">{{errors.first_name}}</span>
       </div>

       <div class="form-group">
           <label>Last Name</label>
           <input type="text" v-model="last_name" class="form-control form-control-lg" />
       </div>
       <span v-if="errors.last_name" style="color:red">{{errors.last_name}}</span>

       <div class="form-group">
           <label>Email address</label>
           <input type="email" v-model="email" class="form-control form-control-lg" />
       </div>
       <span v-if="errors.email" style="color:red">{{errors.email}}</span>

       <div class="form-group">
           <label>Password</label>
           <input type="password" v-model="password" class="form-control form-control-lg" />
       </div>
       <span v-if="errors.password" style="color:red">{{errors.password}}</span>

       <button  class="btn btn-dark btn-lg btn-block" @click="RegisterForm">Signup</button>

   </form>
 </div>
 <div class="col-sm-4"></div>
</div>

    </div>
</template>


<script>
import { mapState } from 'vuex';

// const axios = require('axios');
export default {
  name: "Signup",
  components:{

  },
  computed: {
    ...mapState([
      'token', 'successmessage', 'errormessage'
    ])
  },
  data() {
    return {
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      errors: [],
    }
  },

  methods:{

    RegisterForm() {
      this.errors = [];
      if(this.first_name==''){
        this.errors['first_name']="First Name required."
      }else if(this.last_name=='') {
        this.errors['last_name']='Last Name required.'
      }else if(this.email=='') {
        this.errors['email']='Email required.'
      }else if(this.password=='') {
        this.errors['password']='Password required.'
      }
      else{
        var formData = new FormData();
        this.$store.dispatch("registeruser", {'first_name':this.first_name,
          'last_name':this.last_name,'email':this.email,
          'password':this.password}).then(() => {
          if(this.successmessage=='success'){
            this.$router.replace("/");
          }else if(this.errormessage == 'errormessage'){
            alert("Signup error")
          }
        })
      }
    },
  }

};
</script>
