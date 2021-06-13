<template>
  <section class="photogallery-page">
    <div class="photo-track-wrapper overflow" id="left" @scroll="fancyScroll">
      <template v-for="(image, i) in images">
        <ImageMask
          :width="width"
          :height="height"
          :imageName="image"
          :key="i"
        />
      </template>
    </div>

    <div class="photo-track-wrapper overflow" id="center" @scroll="fancyScroll">
      <ImageMask :width="width2" :height="height2" :imageName="images[2]" />
      <ImageMask :width="width2" :height="height2" :imageName="images[3]" />
      <ImageMask :width="width2" :height="height2" :imageName="images[4]" />
      <ImageMask :width="width2" :height="height2" :imageName="images[5]" />
    </div>

    <div class="photo-track-wrapper overflow" id="right" @scroll="fancyScroll">
      <ImageMask :width="width" :height="height" :imageName="images[4]" />
      <ImageMask :width="width" :height="height" :imageName="images[5]" />
      <ImageMask :width="width" :height="height" :imageName="images[6]" />
      <ImageMask :width="width" :height="height" :imageName="images[6]" />
    </div>
  </section>
</template>

<script>
import { responsiveLayout, alertResponsiveLayout } from '~/js/responsiveLayout';

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
    fancyScroll(e) {
      // console.log('scrolling', e.target.scrollTop);
      const element = e.target;
      // element.scrollTo({ bottom: 1000, behavior: 'smooth' });
      // element.scrollTop += 40;
      // console.log(element.offsetBottom);
    },
  },
  // mounted() {
  //   document.addEventListener('scroll', this.fancyScroll);
  // },
  // destroyed() {
  //   document.removeEventListener('scroll', this.fancyScroll);
  // },
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
