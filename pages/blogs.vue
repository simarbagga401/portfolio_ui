<template>
  <section class="blogs-page overflow">
    <ImageMask
      :width="width"
      :height="height"
      :imageName="images[0]"
      :decorationDirection="dir"
      @click.native="dir == 'left' ? (dir = 'right') : (dir = 'left')"
      :pipeHeight="100"
    />
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
      dir: 'left',
      width: 250,
      height: 400,
      images: [
        'Stock1.png',
        'Stock2.png',
        'Stock3.png',
        'Stock4.png',
        'Stock5.png',
        'Stock6.png',
        'Stock7.png',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';

.blogs-page {
  width: 100%;
  height: 100%;
  background: colors.$primary-orange;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
