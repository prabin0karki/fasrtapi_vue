<template>
  <div id="app">
    <router-view></router-view>
  </div>

  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>

import LoginPage from './components/Loginpage.vue';
export default {
  // name: "app",
  components:{
    "login-page": LoginPage,
  },
  data() {
    return {
      'auth': true,
    }
  },
  mounted: function() {

  }
};



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
a{
  color: #e2e7ec;
}
</style>
