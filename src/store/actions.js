const axios = require('axios');

export default {


  listProfile({commit}){
      axios.defaults.headers.common['authorization'] = 'Bearer '+ this.state.token
      return axios
      .get('http://localhost:8000/users', {})
      .then(response => {
            commit('setProfile',response.data)
        })
      .catch(error=>{
        if (error.response.status==401){
          window.location.replace("/logout");
        }
      })
    },

    registeruser({state,commit}, user_obj){
      axios.defaults.headers.common['authorization'] = 'Bearer '+ this.state.token
      return axios
        .post('http://localhost:8000/users', user_obj,{
          headers: {
              'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if(response.status==200){
            commit("setSuccessMessage", "success");
          }
        })
        .catch(error=>{
          if (error){
            commit("setErrorMessage", 'errormessage');
            // commit("setMessage",error.error.response.data.detail);
          }
        })
    },
};
