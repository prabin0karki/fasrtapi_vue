<template>
<div>
      <app-header></app-header>
      <div>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="User Info">
          <b-card-text>
            <p>First Name: {{profile.first_name}}</p>
            <p>Last Name: {{profile.last_name}}</p>
            <p>Email: {{profile.email}}</p>
            <p>Is Active: {{profile.is_active}}</p>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</div>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import AppHeader from './Navbar.vue';

// const axios = require('axios');
export default {
  name: "Profile",
  components:{
      'app-header': AppHeader
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
<style lang="css" scoped>
.overflow-hidden {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  margin-top: 20px;
}
</style>
