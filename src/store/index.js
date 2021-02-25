import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 
let store = new Vuex.Store({
 
  state: {
    username:'',
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      state.username = user.username;
      localStorage.setItem('Authorization', user.Authorization);
    }
  }
});
 
export default store;