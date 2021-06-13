<template>
  <div class="track">
    <VideoCarouselBtn direction="left" class="video-carousel-btn-left" />

    <carousel-3d
      :autoplay="false"
      :autoplayTimeout="5000"
      :autoplayHoverPause="true"
      :display="3"
      :perspective="0"
      :animationSpeed="750"
      :width="500"
      :border="0"
      :height="281.25"
      :space="500"
      :clickable="true"
      :controlsVisible="true"
      @after-slide-change="changeCarouselActiveIndex"
    >
      <slide v-for="video in videos" :index="video.id" :key="video.id">
        <template slot-scope="{ isCurrent }">
          <VideoCarouselMask :videoId="video.videoId" :active="isCurrent" />
        </template>
      </slide>
    </carousel-3d>

    <VideoCarouselBtn direction="right" class="video-carousel-btn-right" />
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  props: ['videos'],
  methods: {
    changeCarouselActiveIndex(index) {
      this.$emit('change-carousel-active-index', index);
    },
  },
  components: {
    Carousel3d,
    Slide,
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

  .carousel-3d-slide {
    background: transparent;
  }

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
