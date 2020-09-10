export default {


    setToken(state, token) {
        state.token = token;
    },

    setProfile(state, profile) {
        state.profile = profile;
    },

    setSuccessMessage(state, successmessage) {
        state.successmessage = successmessage;
    },
    setErrorMessage(state, errormessage) {
        state.errormessage = errormessage;
    },

    setProduct(state, product_obj) {
        state.product_obj = product_obj;
    },

    setCategory(state, category_obj){
        state.category_obj = category_obj;
    },



}
