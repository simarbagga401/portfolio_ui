<template>
  <section class="photogallery-page">
    <div class="left">
      <ImageMask />
    </div>
    <div class="center"></div>
    <div class="right"></div>
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
  data() {
    return {
      images: [{}],
    };
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
