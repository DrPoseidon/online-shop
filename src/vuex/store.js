import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
    products:[],
    cart:[],
    },
    mutations:{
      SET_PRODUCTS_TO_STATE: (state,products) =>{
        state.products = products;
      },
      SET_CART: (state,product)=>{
        if(state.cart.length){
          let isProductExists = false;
          state.cart.map(item=>{
            if(item._id === product._id){
              isProductExists = true;
              item.quantity++;
            }
          })
          if(!isProductExists){
            state.cart.push(product);
          }
        } else {
          state.cart.push(product);
        }
      },
      REMOVE_FROM_CART: (state, data)=>{
        state.cart.splice(data,1);
      }
    },
    actions:{
      async GET_PRODUCTS_FROM_API({ commit}) {
        try {
          const products = await axios.post("http://localhost:8081/api/get");
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products.data;
        } catch (error) {
          console.error(error);
          return error;
        }
      },
      ADD_TO_CART({commit}, product){
        commit('SET_CART',product);
      },
      DELETE_FROM_CART({commit},data){
        commit('REMOVE_FROM_CART',data);
      }
    },
    getters:{
      PRODUCTS(state){
        return state.products;
      },
      CART(state){
        return state.cart;
      }
    }
});

export default store;
