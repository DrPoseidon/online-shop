<style lang="scss" module>
@import './styles.scss';
</style>

<template>
  <div :class="$style.vMainWrapper">
    <router-view></router-view>
    <VCatalog />
    <!-- <VCart v-if="CART.length" :cartData="CART" /> -->
  </div>
</template>

<script>
// import VCart from '../VCart/VCart';
// import VCatalog from '../VCatalog/VCatalog';
import { mapGetters } from 'vuex';

export default {
  name: 'VMainWrapper',
  // components: { VCart, VCatalog },
  computed: {
    ...mapGetters(['CART']),
  },
};
</script>
