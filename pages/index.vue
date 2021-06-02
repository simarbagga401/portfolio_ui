<template>
  <section class="landing-page">
    <!-- <div class="decoration-bar" /> -->
    <!-- <ImageMask imageName="Stock2" width="400" height="600" /> -->
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

.landing-page {
  position: relative;
}

// .decoration-bar {
//   width: 168px;
//   height: 12px;
//   background: colors.$light-black-transparent;
//   position: absolute;
//   top: 40px;
//   left: 120px;

//   &:before {
//     content: '';
//     position: absolute;
//     bottom: -500px;
//     left: 20px;
//     height: 363px;
//     width: 12px;
//     background: colors.$light-black-transparent;
//   }
// }
</style>
