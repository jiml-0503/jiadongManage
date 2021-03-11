import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex);
 
// let store = new Vuex.Store({
 
//   state: {
//     username:'',
//     // 存储token
//     Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
//   },
 
//   mutations: {
//     // 修改token，并将token存入localStorage
//     changeLogin (state, user) {
//       state.Authorization = user.Authorization;
//       state.username = user.username;
//       localStorage.setItem('Authorization', user.Authorization);
//     }
//   }
// });
 
const store = new Vuex.Store({
  modules: {
    user,
    app,
    settings
  },
  getters
})

export default store;