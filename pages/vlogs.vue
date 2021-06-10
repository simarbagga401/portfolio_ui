<template>
  <section class="vlogs-page">
    <h1 class="video-title">{{ videos[i].name }}</h1>

    <div class="thumbnail-background">
      <img
        :src="`https://img.youtube.com/vi/${videos[i].videoId}/sddefault.jpg`"
        alt=""
      />
      <div class="video-carousel-track-wrapper">
        <VideoCarouselTrack
          :videos="videos"
          @change-carousel-active-index="changeCarouselActiveIndex"
        />
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
  methods: {
    changeCarouselActiveIndex(index) {
      this.i = index;
    },
  },
  data() {
    return {
      i: 0,
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
  background: colors.$primary-green;
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
  transition: all 0.5s ease-in-out;
}

.thumbnail-background {
  outline: 5px solid colors.$dark-green;
  padding: 10px;
  position: relative;
  width: 90%;
  height: 85%;
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
    opacity: 0.7;
    transition: all 0.5s ease-in;
  }
}
</style>
