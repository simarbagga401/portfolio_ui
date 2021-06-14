<template>
  <section class="photogallery-page">
    <button @click="syncScroll">scroll</button>
    <div class="photo-track-wrapper overflow" id="left" data-scrollbar>
      <template v-for="(image, i) in images">
        <ImageMask
          :width="width"
          :height="height"
          :imageName="image"
          :key="i"
          :id="`left-${i}`"
        />
      </template>
    </div>

    <div class="photo-track-wrapper overflow" id="center" data-scrollbar>
      <template v-for="(image, i) in images">
        <ImageMask
          :width="width2"
          :height="height2"
          :imageName="image"
          :key="i"
          :id="`center-${i}`"
        />
      </template>
    </div>

    <div class="photo-track-wrapper overflow" id="right" data-scrollbar>
      <template v-for="(image, i) in images">
        <ImageMask
          :width="width"
          :height="height"
          :imageName="image"
          :key="i"
          :id="`right-${i}`"
        />
      </template>
    </div>
  </section>
</template>

<script>
import { responsiveLayout, alertResponsiveLayout } from '~/js/responsiveLayout';
import Scrollbar from 'smooth-scrollbar';

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
  methods: {
    syncScroll() {
      console.log('working');
      console.log(document.querySelector('#center').limit);
    },
    initScrollbar() {
      const options = {
        damping: 0.0165,
        thumbMinSize: 1,
      };

      // Scrollbar.initAll(options);
      Scrollbar.init(document.querySelector('#center'), options);
    },
    destroyScrollbar() {
      Scrollbar.destroyAll();
    },
  },
  mounted() {
    this.initScrollbar();
  },
  destroyed() {
    this.destroyScrollbar();
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
  overflow: hidden;
  grid-template-rows: 1fr;
  grid-template-areas: 'left center right';
}

.photo-track-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
  // pointer-events: none;

  &#left {
    grid-area: left;
    background: rgb(255, 174, 174);
    align-items: flex-end;
  }

  &#center {
    grid-area: center;
    background: rgb(210, 255, 233);
    align-items: center;
  }

  &#right {
    grid-area: right;
    background: rgb(255, 195, 245);
    align-items: flex-start;
  }
}
</style>
