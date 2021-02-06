import axios from 'axios';

export default {
  async GET_PRODUCTS_FROM_API({ commit }) {
    try {
      const products = await axios.post('http://localhost:8081/api/get');
      commit('SET_PRODUCTS_TO_STATE', products.data);
      return products.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  ADD_TO_CART({ commit }, product) {
    commit('SET_CART', product);
  },
  DELETE_FROM_CART({ commit }, product) {
    commit('REMOVE_FROM_CART', product);
  },
  INCREMENT_QUANTITY({ commit }, id) {
    commit('INCREMENT', id);
  },
  DECREMENT_QUANTITY({ commit }, id) {
    commit('DECREMENT', id);
  },
};
