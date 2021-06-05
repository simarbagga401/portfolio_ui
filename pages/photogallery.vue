<template>
  <section class="photogallery-page">
    <h1>photo gallery</h1>
    <div
      style="
        width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: lightblue;
        margin: 10px;
      "
    ></div>
  </section>
</template>

<script>
import {
  responsiveLayout,
  alertResponsiveLayout,
} from '~/functions/responsiveLayout';

export default {
  layout: responsiveLayout(),
  mounted() {
    alertResponsiveLayout();
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';
.photogallery-page {
  width: 100%;
  height: 100%;

  background: colors.$primary-blue;
}
</style>
