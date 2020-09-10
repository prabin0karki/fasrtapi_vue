<template>
<div>
  <b-card no-body class="text-center">
    <div class="bg-secondary text-light">
      This is some content without the default <samp>&lt;b-card-body&gt;</samp> section. Notice the
      lack of padding between the card's border and this gray <samp>&lt;div&gt;</samp>.
    </div>
  </b-card>
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
