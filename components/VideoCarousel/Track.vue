<template>
  <div class="track" @change="change()">
    <VideoCarouselBtn direction="left" class="video-carousel-btn-left" />

    <slot />

    <VideoCarouselBtn direction="right" class="video-carousel-btn-right" />
  </div>
</template>

<script>
export default {
  props: ['videos'],

  methods: {
    change() {
      console.log('change');
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';

.track {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;

  .video-carousel-btn-left {
    z-index: 10;
    transform: translatex(40px);
    pointer-events: none;
  }

  .video-carousel-btn-right {
    z-index: 10;
    transform: translateX(-40px);
    pointer-events: none;
  }
}
</style>
