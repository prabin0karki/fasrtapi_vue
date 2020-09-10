<template>
<div>
  <app-header></app-header>
    <div class="container">
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <b-form v-on:submit.prevent="onSubmit">

                    <b-form-group id="input-group-1" label="Category Name:" label-for="input-1" description="Add a category name.">
                        <b-form-input id="input-1" v-model="category_name" type="text" required placeholder="Enter Category name"></b-form-input>
                    </b-form-group>

                    <b-button @click="onSubmit" variant="primary">Submit</b-button>
                </b-form>
            </div>
            <div class="col-sm-4"></div>

        </div>
    </div>

    <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
    </b-card> -->
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
      'token','profile', 'category_obj', 'successmessage', 'errormessage'
    ])
  },
    created() {
    this.listProfile();
    this.listCategories();
  },
    data() {
        return {
          category_name:'',
        }
    
    },
    methods: {
      ...mapActions(["listProfile", "listCategories"]),

        onSubmit() {
            this.$store.dispatch("createCategory", {'name':this.category_name}).then(() => {
          if(this.successmessage=='success'){
            this.$router.replace("/");
          }else if(this.errormessage == 'errormessage'){
            alert("Signup error")
          }
        })
        },

    }
}
</script>

<style lang="css" scoped>
.container {
    margin-top: 15px;
}
</style>
