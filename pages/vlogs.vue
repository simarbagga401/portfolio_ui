<template>
  <section class="vlogs-page">
    <h1 class="video-title">{{ videoInfo[i + 1].name }}</h1>

    <div class="thumbnail-background">
      <!-- <img src="~/assets/images/Stock2.png" alt="" /> -->

      <div class="video-carousel-track-wrapper">
        <!-- <template v-for="video in videoInfo"> -->

        <VideoCarouselBtn direction="left" @click.native="i--" />

        <template v-for="(video, index) in videoInfo">
          <div
            class="video"
            :class="{
              left: index == i,
              center: index == i + 1,
              right: index == i + 2,
            }"
            :key="video.id"
          >
            <p>{{ index }}</p>
          </div>
        </template>

        <VideoCarouselBtn direction="right" @click.native="i++" />
      </div>
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
      i: 0,
      cta: {
        link: '/vlogs',
        name: 'My Vlogs',
        width: 120,
        height: 50,
      },
      active: true,
      videoInfo: [
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
  watch: {
    i(oldVal, newVal) {
      console.log(oldVal, newVal);
    },
  },
  computed: {
    carouselClass() {
      return (index) => {
        return {
          left: index == this.i,
          center: index == this.i + 1,
          right: index == this.i + 2,
        };
      };
    },
  },
  methods: {
    incrementI() {
      this.i += 1;
      console.log(this.i);
    },
    decrementI() {
      this.i += 1;
      console.log(this.i);
    },
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
  width: 90%;
  height: 80%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(255, 133, 133);
  justify-content: center;

  .video-carousel-track-wrapper {
    width: 100%;
    height: 50%;
    background: rgb(255, 136, 136);
    display: flex;
    align-items: center;

    .video {
      width: 200px;
      height: 150px;
      background: rgb(127, 125, 255);
      border: 1px solid #000;
      display: none;
      transition: all 0.5s ease-in-out;

      &.left,
      &.right {
        background: rgb(162, 255, 190);
        display: block;
      }

      &.left {
        transform: translateX(10px);
      }

      &.right {
        transform: translateX(-10px);
      }

      &.center {
        background: rgb(255, 92, 201);
        width: 250px;
        height: 180px;
        display: block;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25),
          -5px -5px 10px rgba(0, 0, 0, 0.25);
        z-index: 10;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    border-radius: 30px;
    opacity: 0.8;
  }
}
</style>
