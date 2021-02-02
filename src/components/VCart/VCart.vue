<style lang="scss" module>
@import './styles.scss';
</style>

<template>
  <div :class="$style.VCart">
    <h1>Cart</h1>
    <VCartItem
      v-for="item in cartData"
      :key="item._id"
      :cartItemData="item"
      @deleteFromCart="deleteFromCart"
    />
  </div>
</template>
<script>
import VCartItem from '../VCartItem/VCartItem';
import { mapActions } from 'vuex';

export default {
  name: 'VCart',
  components: {
    VCartItem,
  },
  props: {
    cartData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart(data) {
      this.DELETE_FROM_CART(data);
    },
  },
};
</script>
