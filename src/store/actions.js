const axios = require('axios');

export default {


  listProfile({ commit }) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + this.state.token
    return axios
      .get('http://localhost:8000/profile', {})
      .then(response => {
        commit('setProfile', response.data)
      })
      .catch(error => {
        if (error.response.status == 401) {
          window.location.replace("/logout");
        }
      })
  },

  registeruser({ state, commit }, user_obj) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + this.state.token
    return axios
      .post('http://localhost:8000/users', user_obj, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit("setSuccessMessage", "success");
        }
      })
      .catch(error => {
        if (error) {
          commit("setErrorMessage", 'errormessage');
          // commit("setMessage",error.error.response.data.detail);
        }
      })
  },

  listProduct({ commit }) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + this.state.token
    return axios
      .get('http://localhost:8000/products/', {})
      .then(response => {
        commit('setProduct', response.data)
      })
      .catch(error => {
        if (error.response.status == 401) {
          window.location.replace("/logout");
        }
      })
  },

  createProduct({ state, commit }, product_obj) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + this.state.token
    return axios
      .post('http://localhost:8000/product/', product_obj, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit("setSuccessMessage", "success");
        }
      })
      .catch(error => {
        if (error) {
          commit("setErrorMessage", 'errormessage');
          // commit("setMessage",error.error.response.data.detail);
        }
      })
  },

  listCategories({ commit }) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + this.state.token
    return axios
      .get('http://localhost:8000/categories/', {})
      .then(response => {
        commit('setCategory', response.data)
      })
      .catch(error => {
        if (error.response.status == 401) {
          window.location.replace("/logout");
        }
      })
  },

  createCategory({ state, commit }, category_obj) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + this.state.token
    return axios
      .post('http://localhost:8000/category/', category_obj, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit("setSuccessMessage", "success");
        }
      })
      .catch(error => {
        if (error) {
          commit("setErrorMessage", 'errormessage');
          // commit("setMessage",error.error.response.data.detail);
        }
      })
  },


  updateProduct({ state, commit }, product_obj) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + this.state.token
    return axios
      .put('http://localhost:8000/products/' + product_obj.id, product_obj,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        commit("setSuccessMessage", "success");
        state.product_obj.push(response.data);
      })
      .catch(error => {
        if (error) {
          commit("setErrorMessage", 'errormessage')
          // commit("setMessage", error.response.data.message);
        }
      })
  },


  updateCategory({ state, commit }, category_obj) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + this.state.token
    return axios
      .put('http://localhost:8000/categories/' + category_obj.id, category_obj,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        commit("setSuccessMessage", "success");
        state.category_obj.push(response.data);
      })
      .catch(error => {
        if (error) {
          commit("setErrorMessage", 'errormessage')
          // commit("setMessage", error.response.data.message);
        }
      })
  },


  

  deleteProduct({ commit }, product_id) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + this.state.token
    return axios
      .delete('http://localhost:8000/products/' + product_id, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit('setSuccessMessage', 'success');
        }
      })
      .catch(error => {
        if (error) {
          commit("setErrorMessage", 'errormessage');
        }
      })
  },

  deleteCategory({ commit }, category_id) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + this.state.token
    return axios
      .delete('http://localhost:8000/categories/' + category_id, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit('setSuccessMessage', 'success');
        }
      })
      .catch(error => {
        if (error) {
          commit("setErrorMessage", 'errormessage');
        }
      })
  },
  

};
