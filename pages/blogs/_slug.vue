<template>
  <section class="blog-slug overflow">
    <h1>blog slug</h1>
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

.blog-slug {
  width: 100%;
  height: 100%;
  background: colors.$primary-orange;
  display: flex;
  align-items: space-between;
  justify-content: center;
}
</style>
