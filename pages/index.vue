<template>
  <div>
    <!-- <ImageMask imageName="Stock2" width="400" height="600" /> -->
  </div>
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

<style lang="scss" scoped></style>
