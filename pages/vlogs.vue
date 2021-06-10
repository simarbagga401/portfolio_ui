<template>
  <section class="vlogs-page">
    <h1 class="video-title">{{ videos[i + 1].name }}</h1>

    <div class="thumbnail-background">
      <img
        src="https://img.youtube.com/vi/CzHnwcZnF-E/maxresdefault.jpg"
        alt=""
      />

      <div class="video-carousel-track-wrapper">
        <VideoCarouselTrack>
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
            :controlsVisible="true"
          >
            <slide v-for="video in videos" :index="video.id" :key="video.id">
              <template slot-scope="{ isCurrent, index }">
                <VideoCarouselMask
                  :videoId="video.videoId"
                  :active="isCurrent"
                  :class="`mask-${index}`"
                />
              </template>
            </slide>
          </carousel-3d>
        </VideoCarouselTrack>
      </div>
    </div>
  </section>
</template>

<script>
import {
  responsiveLayout,
  alertResponsiveLayout,
} from '~/functions/responsiveLayout';
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  layout: responsiveLayout(),
  mounted() {
    alertResponsiveLayout();
  },
  components: {
    Carousel3d,
    Slide,
  },
  methods: {
    logVal(val) {
      console.log(val);
    },
  },
  data() {
    return {
      i: 0,
      cta: {
        link: '/vlogs',
        name: 'My Vlogs',
        width: 120,
        height: 50,
      },
      active: true,
      videos: [
        {
          id: 0,
          name: 'Tomazacre Music',
          videoId: 'CzHnwcZnF-E',
        },
        {
          id: 1,
          name: 'King Of The Groove',
          videoId: 'CCtPcyNAVyY',
        },
        {
          id: 2,
          name: 'Blue Mountain Beatbox',
          videoId: 'PLkvQehlm1E',
        },
        {
          id: 3,
          name: 'Tomazacre Music',
          videoId: 'CzHnwcZnF-E',
        },
        {
          id: 4,
          name: 'King Of The Groove',
          videoId: 'CCtPcyNAVyY',
        },
        {
          id: 5,
          name: 'Blue Mountain Beatbox',
          videoId: 'PLkvQehlm1E',
        },
        {
          id: 6,
          name: 'Tomazacre Music',
          videoId: 'CzHnwcZnF-E',
        },
        {
          id: 7,
          name: 'King Of The Groove',
          videoId: 'CCtPcyNAVyY',
        },
        {
          id: 8,
          name: 'Blue Mountain Beatbox',
          videoId: 'PLkvQehlm1E',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';
@use '~/assets/styles/typography';

.vlogs-page {
  width: 100%;
  height: 100%;
  // background: colors.$primary-green;
  background: rgb(185, 185, 185);
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.carousel-3d-slide {
  background: transparent;
}

.video-title {
  font-family: typography.$serif;
  color: colors.$dark-green;
  font-size: 42px;
  text-decoration: line-through;
  text-decoration-color: colors.$secondary-orange;
  text-decoration-thickness: 3px;
}

.thumbnail-background {
  padding: 10px;
  position: relative;
  width: 90%;
  height: 80%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .video-carousel-track-wrapper {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    z-index: 13;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    // object-position: top left;
    border-radius: 30px;
    opacity: 0.8;
  }
}
</style>
