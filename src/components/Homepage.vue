<template>
    <div class="vue-tempalte">
      <div class="row">
 <div class="col-sm-4"></div>
 <div class="col-sm-4">
   <h1>
   <p>Welcome to Homepage  {{profile.first_name}} {{profile.last_name}}.</p>
 </h1>
 <button type="button" name="button">
      <router-link to="/logout">Logout</router-link>
    </button>

 </div>
 <div class="col-sm-4"></div>
</div>

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
