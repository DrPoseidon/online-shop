<style lang="scss" module>
@import './styles.scss';
</style>

<template>
  <div :class="$style.vCatalog">
    <router-link :to="{ name: 'cart' }" :class="$style.linkToCart">
      Cart: {{ CART.length }}
    </router-link>
    <h1>Catalog</h1>
    <div :class="$style.list">
      <VCatalogItem
        v-for="product in PRODUCTS"
        :key="product._id"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import VCatalogItem from '../VCatalogItem/VCatalogItem';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'VCatalog',
  components: { VCatalogItem },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART']),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response) {
        console.log('Data arrived');
      }
    });
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
};
</script>
