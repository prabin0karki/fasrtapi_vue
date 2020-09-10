<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/home">Logo</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/home">Home</b-nav-item>
        <b-nav-item ><router-link to="/products">Product</router-link></b-nav-item>
         <b-nav-item ><router-link to="/category">Category</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>{{profile.first_name}} {{profile.last_name}}</em>
          </template>
          <b-dropdown-item>
            <router-link to="/profile">Profile</router-link></b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/logout">Logout</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>


<script>
import { mapState, mapActions } from 'vuex';
// const axios = require('axios');
export default {
  name: "Homepage",
  components:{

  },
  computed: {
    ...mapState([
      'token','profile'
    ])
  },

  created() {
    this.listProfile();
  },
  mounted: function() {
    if (this.$store.state.token == "") {
      this.$router.replace("/");
    }
  },

  data() {
    return {

    };
  },

  methods: {
    ...mapActions(["listProfile"]),
  }

};
</script>
