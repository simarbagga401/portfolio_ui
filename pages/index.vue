<template>
  <section class="landing-page">
    <div class="decoration-bar1" />
    <div class="decoration-bar2" />
    <!-- decoration bars -->

    <div class="text-container">
      <div class="text">
        <h2>Hi There!</h2>
        <h1>
          I Am <br />
          <vue-typer
            :text="['John Doe', 'Youtuber', 'Vlogger', 'Blogger']"
            class="dynamic-heading"
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem ante,
          sollicitudin et elementum quis, ultrices vitae dolor.
        </p>
        <Cta
          :width="cta.width"
          :height="cta.height"
          :link="cta.link"
          :name="cta.name"
        />
      </div>
    </div>

    <div class="image-container">
      <div class="disc-wrapper">
        <div class="disc" :class="`image-${carouselActiveIndex}`">
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
      </div>
    </div>

    <div class="carousel">
      <template v-for="(imageName, i) in imageNames">
        <ImageCarouselBtn
          :key="i"
          :active="isCarouselActiveIndex(i)"
          @click.native="changeCarouselActiveIndex(i)"
        />
      </template>
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
  data() {
    return {
      imageWidth: 200,
      imageHeight: 200,
      imageNames: ['MaskImage1.png', 'MaskImage2.png', 'MaskImage3.png'],
      carouselActiveIndex: 0,
      cta: {
        link: '/vlogs',
        name: 'My Vlogs',
        width: 120,
        height: 50,
      },
    };
  },
  methods: {
    isCarouselActiveIndex(i) {
      return i === this.carouselActiveIndex ? true : false;
    },
    changeCarouselActiveIndex(i) {
      this.carouselActiveIndex = i;
    },
    incrementCarouselActiveIndex() {
      this.carouselActiveIndex === 2
        ? (this.carouselActiveIndex = 0)
        : this.carouselActiveIndex++;
    },
  },
  mounted() {
    setInterval(() => {
      this.incrementCarouselActiveIndex();
    }, 4000);
    alertResponsiveLayout();
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
  // background: rgb(229, 123, 255);
  grid-area: text-container;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  animation: fade 0.5s ease-in;

  @keyframes fade {
    0% {
      transform: translateY(-20px);
      // opacity: 0.3;
    }

    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @media (max-width: 950px) {
    align-items: center;
  }

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

    h1,
    .dynamic-heading {
      // background: rgb(226, 226, 226);
      text-decoration: underline;
      font-family: typography.$serif;
      font-weight: typography.$regular;
      color: colors.$primary-black;
      font-size: 80px;
      line-height: 90px;
      margin-top: -10px;
      margin-bottom: 15px;

      span {
        font-family: typography.$serif;
      }
    }
  }
}
.image-container {
  // background: rgb(123, 132, 255);
  grid-area: image-container;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .disc-wrapper {
    width: 1000px;
    height: 1000px;
    position: absolute;
    // background: rgb(255, 96, 96);
    transform: translateX(300px);
  }

  .disc {
    // background: rgb(255, 113, 142);
    width: 1000px;
    height: 1000px;
    position: relative;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
    // right: -400px;
    // top: -100px;

    &.image-0 {
      transform: rotateZ(-120deg);

      .img-container {
        transform: rotateZ(120deg);
      }
    }
    &.image-1 {
      transform: rotateZ(0deg);

      .img-container {
        transform: rotateZ(0deg);
      }
    }
    &.image-2 {
      transform: rotateZ(120deg);

      .img-container {
        transform: rotateZ(-120deg);
      }
    }

    .image-0 {
      position: absolute;
      top: 0;
      left: 40%;
    }

    .image-1 {
      position: absolute;
      top: 30%;
      left: 0;
    }
    .image-2 {
      position: absolute;
      bottom: 0;
      left: 40%;
    }
  }
}

.carousel {
  // background: rgb(241, 241, 241);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
</style>
