<template>
  <section class="landing-page">
    <div class="decoration-bar1" />
    <div class="decoration-bar2" />
    <!-- decoration bars -->

    <div class="text-container">
      <div class="text">
        <h2>Hi There!</h2>
        <h1>It's John<br />Doe.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ante,
          sollicitudin et elementum quis, ultrices vitae dolor.
        </p>
      </div>
    </div>

    <div class="image-container">
      <template v-for="(imageName, i) in imageNames">
        <ImageCarouselMask
          :class="`image-${i}`"
          :key="imageName"
          :width="imageWidth"
          :height="imageHeight"
          :imageName="imageName"
          :active="isCarouselActiveIndex(i)"
        />
      </template>
    </div>

    <div class="carousel">
      <template v-for="(imageName, i) in imageNames">
        <ImageCarouselBtn
          :key="i"
          :active="isCarouselActiveIndex(i)"
          @click.native="changeCarouselActiveIndex(i)"
        />
      </template>

      <h1>{{ carouselActiveIndex }}</h1>
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
      imageWidth: 200,
      imageHeight: 200,
      imageNames: ['MaskImage1.png', 'MaskImage2.png', 'MaskImage3.png'],
      carouselActiveIndex: 0,
    };
  },
  methods: {
    isCarouselActiveIndex(i) {
      return i === this.carouselActiveIndex ? true : false;
    },
    changeCarouselActiveIndex(i) {
      this.carouselActiveIndex = i;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';
@use '~/assets/styles/typography';
// @use '~/assets/styles/classes';

.landing-page {
  width: 100%;
  height: 100%;
  background: colors.$primary-orange;
  // background: rgb(221, 123, 123);
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 0.1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'text-container image-container carousel';
  overflow: hidden;
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
.text-container {
  background: rgb(229, 123, 255);
  grid-area: text-container;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .text {
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    // background: rgb(168, 168, 168);

    h2 {
      // background: rgb(158, 158, 158);
      color: colors.$dark-green;
      font-size: 32px;
    }

    p {
      // background: rgb(197, 197, 197);
      font-size: 20px;
      color: colors.$dark-green;
    }

    h1 {
      // background: rgb(226, 226, 226);
      text-decoration: underline;
      font-family: typography.$serif;
      font-weight: typography.$regular;
      color: colors.$primary-black;
      font-size: 80px;
      line-height: 90px;
      margin-top: -10px;
      margin-bottom: 15px;
    }
  }
}
.image-container {
  background: rgb(123, 132, 255);
  grid-area: image-container;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

.carousel {
  background: rgb(241, 241, 241);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
</style>
