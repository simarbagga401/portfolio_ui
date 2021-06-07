<template>
  <section class="vlogs-page">
    <h1 class="video-title">{{ videoInfo[i + 1].name }}</h1>

    <div class="thumbnail-background">
      <!-- <img src="~/assets/images/Stock2.png" alt="" /> -->

      <div class="video-carousel-track-wrapper">
        <VideoCarouselTrack>
          <template v-slot:left-btn>
            <VideoCarouselBtn direction="left" @click.native="incrementI()" />
          </template>

          <template v-slot:left>
            <VideoCarouselMask :videoId="videoInfo[i].id" :active="!active" />
          </template>

          <template v-slot:center>
            <VideoCarouselMask
              :videoId="videoInfo[i + 1].id"
              :active="active"
            />
          </template>

          <template v-slot:right>
            <VideoCarouselMask
              :videoId="videoInfo[i + 2].id"
              :active="!active"
            />
          </template>

          <template v-slot:right-btn>
            <VideoCarouselBtn direction="right" @click.native="decrementI()" />
          </template>
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

export default {
  layout: responsiveLayout(),
  mounted() {
    alertResponsiveLayout();
  },
  data() {
    return {
      i: 0,
      active: true,
      videoInfo: [
        {
          name: 'Tomazacre Music',
          id: 'CzHnwcZnF-E',
        },
        {
          name: 'King Of The Groove',
          id: 'CCtPcyNAVyY',
        },
        {
          name: 'Blue Mountain Beatbox',
          id: 'PLkvQehlm1E',
        },
        {
          name: 'Tomazacre Music',
          id: 'CzHnwcZnF-E',
        },
        {
          name: 'King Of The Groove',
          id: 'CCtPcyNAVyY',
        },
        {
          name: 'Blue Mountain Beatbox',
          id: 'PLkvQehlm1E',
        },
      ],
    };
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
    // background: rgb(255, 136, 136);
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
