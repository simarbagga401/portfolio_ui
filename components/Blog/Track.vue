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
      :width="700"
      :border="0"
      :height="681.25"
      :space="700"
      :clickable="true"
      :controlsVisible="true"
      @after-slide-change="changeCarouselActiveIndex"
    >
      <slide v-for="blog in blogs" :index="blog.id" :key="blog.id">
        <template slot-scope="">
          <BlogPreview
            :imageName="blog.imageName"
            :heading="blog.heading"
            :description="blog.description"
            :date="blog.date"
            :key="i"
          />
        </template>
      </slide>
    </carousel-3d>

    <VideoCarouselBtn direction="right" class="video-carousel-btn-right" />
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  props: ['blogs'],
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
    // background: rgb(197, 255, 212);
    background: transparent;
    display: flex;
    justify-content: center;
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
