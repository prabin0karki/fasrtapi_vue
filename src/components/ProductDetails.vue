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
        <b-card-body title="Product Info">
          <b-card-text>
            <p>Category Name: {{category_details.name}}</p>
            <p>Product Name: {{product_details.name}}</p>
            <p>Product Price: {{product_details.price}}</p>
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
export default {
  name: "Product",
  components:{
    'app-header': AppHeader,

  },
    computed: {
    ...mapState([
      'token','profile', 'category_obj', 'product_obj'
    ])
  },
    created() {
    this.listProfile();
    this.listCategories();
    this.listProduct();
  },

    watch: {
  product_obj: function() {
    if (this.$route.params.id) {
      this.product_details = this.product_obj.find(
        evt => evt.id == this.$route.params.id
      );
      this.category_details = this.category_obj.find(
        evt => evt.id == this.product_details.category_id
      );
    }
  },

   product_details: function() {
    if (this.product_details) {
      this.category_details = this.category_obj.find(
        evt => evt.id == this.product_details.category_id
      );
    }
  },



  },
    data() {
        return {
          category_id:'',
          product_name:'',
          product_details:'',
          category_details:'',
        }
    
    },
    methods: {
      ...mapActions(["listProfile", "listCategories", "listProduct"]),

    }
}
</script>

<style lang="css" scoped>
.container {
    margin-top: 15px;
}

.overflow-hidden {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  margin-top: 20px;
}
</style>

