<style lang="scss" module>
@import './styles.scss';
</style>

<template>
  <div :class="$style.vCatalogItem">
    <img
      :class="$style.image"
      :src="require(`../../assets/images/${productData.image}`)"
      alt="img"
    />
    <p :class="$style.name">{{ productData.name }}</p>
    <p :class="$style.price">Price: {{ productData.price }} &#8381;</p>
    <button :class="[$style.addToCart, $style.btn]" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>
<script>
export default {
  name: 'VCatalogItem',
  props: {
    productData: Object,
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.productData);
    },
  },
};
</script>
