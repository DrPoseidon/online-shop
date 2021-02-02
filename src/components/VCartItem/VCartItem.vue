<style lang="scss" module>
@import './styles.scss';
</style>

<template>
  <div :class="$style.VCartItem">
    <img
      :class="$style.cartItemIMG"
      :src="require(`../../assets/images/${cartItemData.image}`)"
      alt="img"
    />
    <div :class="$style.info">
      <p>{{ cartItemData.name }}</p>
      <p>{{ cartItemData.price }}</p>
      <p>{{ cartItemData.article }}</p>
    </div>
    <div :class="$style.quantity">
      <p>Qty</p>
      {{ cartItemData.quantity }}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>
<script>
export default {
  name: 'VCartItem',
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.$set(this.cartItemData, 'quantity', 1);
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
  },
};
</script>
