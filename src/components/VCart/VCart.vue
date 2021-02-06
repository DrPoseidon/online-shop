<style lang="scss" module>
@import './styles.scss';
</style>

<template>
  <div :class="$style.VCart">
    <router-link to="/" :class="$style.linkToMain"
      >Back to Catalog
    </router-link>
    <h1>Cart</h1>
    <p v-if="!CART.length">There are no products in cart...</p>
    <VCartItem
      v-for="item in CART"
      :key="item._id"
      :cartItemData="item"
      @deleteFromCart="deleteFromCart(item)"
      @incrementQuantity="increment(item)"
      @decrementQuantity="decrement(item)"
    />
    <div :class="$style.total">
      <p :class="$style.name">Total:</p>
      <p>{{ cartTotalCost }} &#8381;</p>
    </div>
  </div>
</template>
<script>
import VCartItem from '../VCartItem/VCartItem';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'VCart',
  components: {
    VCartItem,
  },
  computed: {
    ...mapGetters(['CART']),
    cartTotalCost() {
      const { CART } = this;
      let res = 0;
      if (CART.length) {
        CART.forEach((el) => {
          res += el.quantity * el.price;
        });
      }
      return res;
    },
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'DECREMENT_QUANTITY',
      'INCREMENT_QUANTITY',
    ]),
    deleteFromCart(data) {
      this.DELETE_FROM_CART(data);
    },
    increment(id) {
      this.INCREMENT_QUANTITY(id);
    },
    decrement(id) {
      this.DECREMENT_QUANTITY(id);
    },
  },
};
</script>
