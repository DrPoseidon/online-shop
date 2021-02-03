<style lang="scss" module>
@import './styles.scss';
</style>

<template>
  <div :class="$style.vMainWrapper">
    <keep-alive><router-view /></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'VMainWrapper',
};
</script>
