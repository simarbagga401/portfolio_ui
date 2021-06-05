<template>
  <section class="landing-page">
    <div class="decoration-bar1" />
    <div class="decoration-bar2" />
    <!-- decoration bars -->
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
  width: 100%;
  height: 100%;
  background: colors.$primary-orange;
  // background: rgb(221, 123, 123);
  position: relative;
}
.decoration-bar1 {
  width: 168px;
  height: 12px;
  background: colors.$light-black-transparent;
  position: absolute;
  top: 50px;
  left: 50px;
}
.decoration-bar2 {
  width: 12px;
  height: 363px;
  background: colors.$light-black-transparent;
  position: absolute;
  bottom: 5px;
  left: 10px;
}
</style>
