<template>
<div>
  <app-header></app-header>
  <banner-header></banner-header>
  <div class="container">
        <div class="row">
            <div class="col-sm-4" v-for="(product,index) in product_obj" :key="index">
                <b-card :title="product.name" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                    <!-- <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text> -->
                    <b-button href="#" variant="primary">
                      <router-link :to="'/product-details/'+product.id">Details</router-link></b-dropdown-item>
                      </b-button>
                </b-card>

            </div>
        </div>
    </div>
  <b-card-footer>
    Copyright  <a href="https://kprabin.com.np/" target="_blank">Prabin Karki</a> | Powered by  Codavatar.
  </b-card-footer>
</div>

</template>


<script>
import { mapState, mapActions } from 'vuex';
import AppHeader from './Navbar.vue';
import BannerHeader from './Banner.vue'
import FooterPage from './Footer.vue'
import { BCard } from 'bootstrap-vue'
// const axios = require('axios');
export default {
  name: "Homepage",
  components:{
    'app-header': AppHeader,
     'banner-header': BannerHeader,
     'footer-header':FooterPage,
     'b-card-footer': BCard

  },
  computed: {
    ...mapState([
      'token','profile', 'product_obj'
    ])
  },

  created() {
    this.listProfile();
    this.listProduct();
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
    ...mapActions(["listProfile", "listProduct"]),
  }

};
</script>

<style lang="css" scoped>
.container{
    margin-top: 15px;
}
</style>
