<template>
  <section class="photogallery-page">
    <div class="photo-track-wrapper" id="left">
      <PhotogalleryMask
        :width="width"
        :height="height"
        :imageName="images[0]"
      />
      <PhotogalleryMask
        :width="width"
        :height="height"
        :imageName="images[1]"
      />
    </div>

    <div class="photo-track-wrapper" id="center">
      <PhotogalleryMask
        :width="width2"
        :height="height2"
        :imageName="images[2]"
      />
      <PhotogalleryMask
        :width="width2"
        :height="height2"
        :imageName="images[3]"
      />
    </div>

    <div class="photo-track-wrapper" id="right">
      <PhotogalleryMask
        :width="width"
        :height="height"
        :imageName="images[4]"
      />
      <PhotogalleryMask
        :width="width"
        :height="height"
        :imageName="images[5]"
      />
    </div>
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
      images: [
        'Stock1.png',
        'Stock2.png',
        'Stock3.png',
        'Stock4.png',
        'Stock5.png',
        'Stock6.png',
        'Stock7.png',
      ],
      width: 254,
      height: 371,
      width2: 415,
      height2: 481,
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
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'left center right';
}

.photo-track-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: scroll;

  &#left {
    grid-area: left;
    background: rgb(255, 174, 174);
    align-items: flex-end;
  }

  &#center {
    grid-area: center;
    background: rgb(210, 255, 233);
    align-items: center;
    gap: 50px;
  }

  &#right {
    grid-area: right;
    background: rgb(255, 195, 245);
    align-items: flex-start;
  }
}
</style>
