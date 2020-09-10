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
    <div class="product-table">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(category,index) in category_obj" :key="index">
                            <th scope="row">{{category.id}}</th>
                            <td>{{category.name}}</td>
                            <td><button v-b-modal.modal-1 @click="getCategoryid(category.id)">Edit</button> <button v-b-modal.modal-2 @click="getCategoryid(category.id)">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>

    <b-modal id="modal-1" title="Edit Category">
        <b-form v-on:submit.prevent="onSubmitUpdate">

            <b-form-group id="input-group-1" label="Category Name:" label-for="input-1" description="Add a category name.">
                <b-form-input id="input-1" v-model="category_details.name" type="text" required placeholder="Enter Category name"></b-form-input>
            </b-form-group>

            <b-button @click="onSubmitUpdate" variant="primary">Submit</b-button>
        </b-form>
    </b-modal>

            <b-modal id="modal-2" title="Delete Category">
        <b-form v-on:submit.prevent="onSubmitUpdate">
            <p>Are you sure you want to delete??</p>
            <b-button @click="onSubmitDelete(category_details.id)" variant="primary">Yes</b-button>
        </b-form>
    </b-modal>

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
            'token', 'profile', 'category_obj', 'successmessage', 'errormessage'
        ])
    },
    created() {
        this.listProfile();
        this.listCategories();
    },
    data() {
        return {
            category_name: '',
            category_details: '',
        }

    },
    methods: {
        ...mapActions(["listProfile", "listCategories"]),

        onSubmit() {
            this.$store.dispatch("createCategory", {
                'name': this.category_name
            }).then(() => {
                if (this.successmessage == 'success') {
                    this.$router.replace("/");
                } else if (this.errormessage == 'errormessage') {
                    alert("Signup error")
                }
            })
        },

        getCategoryid(category_id) {
            this.category_details = this.category_obj.find(
                evt => evt.id == category_id
            );
        },

        onSubmitUpdate(){
            this.$store.dispatch("updateCategory", {
                'id': this.category_details.id,
                'name': this.category_details.name
            }).then(() => {
                if (this.successmessage == 'success') {
                    location.reload();
                    // this.$router.replace("/");
                } else if (this.errormessage == 'errormessage') {
                    alert("Signup error")
                }
            })
        },

        onSubmitDelete(category_id){
            this.$store.dispatch("deleteCategory", category_id).then(() => {
                if (this.successmessage == 'success') {
                    location.reload();
                    // this.$router.replace("/");
                } else if (this.errormessage == 'errormessage') {
                    alert("Signup error")
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
</style>
