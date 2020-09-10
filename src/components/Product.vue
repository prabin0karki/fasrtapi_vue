<template>
<div>
    <app-header></app-header>
    <div class="container">
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <b-form v-on:submit.prevent="onSubmit">

                    <b-form-group id="input-group-3" label="Select Category:" label-for="input-3">
                        <b-form-select id="input-3" v-model="category_id" required>
                            <option value disabled>Select One</option>
                            <option v-for="(category,index) in category_obj" :key="index" :value="category.id">{{category.name}}</option>
                        </b-form-select>

                    </b-form-group>
                    <b-form-group id="input-group-1" label="Product Name:" label-for="input-1" description="Add a product name.">
                        <b-form-input id="input-1" v-model="product_name" type="text" required placeholder="Enter product name"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-1" label="Product Price:" label-for="input-1">
                        <b-form-input id="input-1" v-model="price" type="number" required placeholder="Enter product price"></b-form-input>
                    </b-form-group>

                    <b-button @click="onSubmit" variant="primary">Submit</b-button>
                </b-form>
            </div>
            <div class="col-sm-4"></div>

        </div>
    </div>

    <div class="product-table">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product,index) in product_obj" :key="index">
                            <th scope="row">{{product.id}}</th>
                            <td>{{product.name}}</td>
                            <td>{{product.price}}</td>
                            <td><button v-b-modal.modal-1 @click="getProductid(product.id)">Edit</button> <button v-b-modal.modal-2 @click="getProductid(product.id)">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>

    <b-modal id="modal-1" title="Edit Product">
        <b-form v-on:submit.prevent="onSubmitUpdate">

            <b-form-group id="input-group-3" label="Select Category:" label-for="input-3">
                <b-form-select id="input-3" v-model="product_details.category_id" required>
                    <option value disabled>Select One</option>
                    <option v-for="(category,index) in category_obj" :key="index" :value="category.id">{{category.name}}</option>
                </b-form-select>

            </b-form-group>
            <b-form-group id="input-group-1" label="Product Name:" label-for="input-1" description="Add a product name.">
                <b-form-input id="input-1" v-model="product_details.name" type="text" required placeholder="Enter product name"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Product Price:" label-for="input-1">
                        <b-form-input id="input-1" v-model="product_details.price" type="number" required placeholder="Enter product price"></b-form-input>
                    </b-form-group>

            <b-button @click="onSubmitUpdate(product_details.id)" variant="primary">Submit</b-button>
        </b-form>
    </b-modal>


        <b-modal id="modal-2" title="Delete Product">
        <b-form v-on:submit.prevent="onSubmitUpdate">
            <p>Are you sure you want to delete??</p>
            <b-button @click="onSubmitDelete(product_details.id)" variant="primary">Yes</b-button>
        </b-form>
    </b-modal>

    <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
    </b-card> -->

</div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex';
import AppHeader from './Navbar.vue';
export default {
    name: "Product",
    components: {
        'app-header': AppHeader,

    },
    computed: {
        ...mapState([
            'token', 'profile', 'category_obj', 'successmessage', 'errormessage', 'product_obj'
        ])
    },
    created() {
        this.listProfile();
        this.listCategories();
        this.listProduct();
    },
    data() {
        return {
            category_id: '',
            product_name: '',
            product_details: '',
            price:'',
        }

    },
    methods: {
        ...mapActions(["listProfile", "listCategories", "listProduct"]),

        toast(toaster, append = false) {
        this.counter++
        this.$bvToast.toast(`Product with that name already exists.`, {
          title: `Product Error`,
          toaster: toaster,
          solid: true,
          appendToast: append
        })
      },

        onSubmit() {
            this.$store.dispatch("createProduct", {
                'name': this.product_name,
                'author_id': this.profile.id,
                'category_id': this.category_id,
                'price': this.price
            }).then(() => {
                if (this.successmessage == 'success') {
                    location.reload();
                    // this.$router.replace("/");
                } else if (this.errormessage == 'errormessage') {
                   this.toast('b-toaster-top-full')
                    // alert("Signup error")
                }
            })
        },

        getProductid(product_id) {
            this.product_details = this.product_obj.find(
                evt => evt.id == product_id
            );
        },

        onSubmitUpdate(product_id){
            this.$store.dispatch("updateProduct", {
                'id': this.product_details.id,
                'name': this.product_details.name,
                'author_id': this.profile.id,
                'category_id': this.product_details.category_id,
                'price': this.product_details.price
            }).then(() => {
                if (this.successmessage == 'success') {
                    location.reload();
                    // this.$router.replace("/");
                } else if (this.errormessage == 'errormessage') {
                    alert("Signup error")
                }
            })
        },

        onSubmitDelete(product_id){
            this.$store.dispatch("deleteProduct", product_id).then(() => {
                if (this.successmessage == 'success') {
                    location.reload();
                    // this.$router.replace("/");
                } else if (this.errormessage == 'errormessage') {
                    
                    // alert("Signup error")
                }
            })

        }
        

    }
}
</script>

<style lang="css" scoped>
.container {
    margin-top: 15px;
}

.product-table {
    margin-top: 20px;
}
</style>
