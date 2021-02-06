import * as _ from 'lodash';

export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let isProductExists = false;
      state.cart.map((item) => {
        if (item._id === product._id) {
          isProductExists = true;
          item.quantity++;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  REMOVE_FROM_CART: (state, product) => {
    _.remove(state.cart, product);
  },
  INCREMENT: (state, id) => {
    // state.cart.map((item) => {
    //   if (item._id === data._id) {
    //     item.quantity++;
    //   }
    // });
    state.cart[id].quantity++;
  },
  DECREMENT: (state, id) => {
    state.cart[id].quantity--;
    // state.cart.map((item) => {
    //   if (item._id === data._id) {
    //     if (item.quantity > 0) {
    //       item.quantity--;
    //       if (item.quantity === 0) {
    //         state.cart.splice(data, 1);
    //       }
    //     }
    //   }
    // });
  },
};
