<template>
  <div id="blog-preview" :class="{ left: direction == 'left' }">
    <div v-if="direction == 'right'" class="decoration" id="left">
      <div class="circle" />
      <div class="pipe" :style="{ height: decorationHeight + 'px' }" />
    </div>

    <ImageMask :width="width" :height="height" :imageName="imageName" />

    <div class="text-wrapper">
      <div class="heading-wrapper">
        <h2>{{ heading }}</h2>
        <span class="date-wrapper"
          ><p class="date">{{ date }}</p></span
        >
      </div>

      <div class="description-wrapper">
        <p class="description">
          {{ truncate(description, 110, '...') }}
        </p>

        <Cta
          :width="cta.width"
          :height="cta.height"
          :link="`/blogs/${id}`"
          :name="cta.name"
        />
      </div>
    </div>
    <div v-if="direction == 'left'" class="decoration" id="right">
      <div class="circle" />
      <div class="pipe" :style="{ height: decorationHeight + 'px' }" />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'direction',
    'decorationHeight',
    'imageName',
    'heading',
    'description',
    'id',
    'date',
  ],
  data() {
    return {
      width: 190,
      height: 310,
      cta: {
        name: 'Read More',
        width: 96,
        height: 26,
      },
    };
  },
  methods: {
    truncate(str, max, suffix) {
      return str.length < max
        ? str
        : `${str.substr(
            0,
            str.substr(0, max - suffix.length).lastIndexOf(' ')
          )}${suffix}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/typography';
@use '~/assets/styles/colors';

#blog-preview {
  width: 550px;
  height: 40%;
  background: rgb(255, 100, 100);
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 35% 0px;

  .text-wrapper {
    width: 80%;
    height: 100%;
    background: rgb(127, 113, 255);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 0 0 0 10px;

    .heading-wrapper {
      width: 100%;
      // height: 25%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgb(113, 255, 184);
      padding: 5px 5px;
      margin-bottom: 5px;
      position: relative;

      &:before {
        content: '';
        display: inline-block;
        background: colors.$primary-black;
        position: absolute;
        top: 0%;
        right: 0;
        height: 1px;
        width: 75%;
      }

      &:after {
        content: '';
        display: inline-block;
        background: colors.$primary-black;
        position: absolute;
        bottom: 0%;
        left: 0;
        height: 1px;
        width: 75%;
      }

      .date-wrapper {
        width: 100px;
        height: 50px;
        background: rgb(255, 104, 217);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-left: 3px solid colors.$dark-green;
      }

      h2 {
        display: inline-block;
        min-width: 180px;
        width: 60%;
        font-family: typography.$serif;
        background: rgb(214, 214, 214);
      }
    }

    .description-wrapper {
      background: rgb(201, 201, 201);
      height: 60%;
      width: 70%;

      .description {
        font-size: 15px;
      }
    }
  }

  &.left {
    .text-wrapper {
      order: -1;
    }

    .description-wrapper {
      align-self: flex-end;
    }

    .heading-wrapper {
      &:before {
        top: 0%;
        left: 0;
      }

      &:after {
        bottom: 0%;
        left: inherit;
        right: 0;
      }

      .date-wrapper {
        order: -1;
        border-left: 0;
        border-right: 3px solid colors.$dark-green;
        justify-content: flex-start;
      }
    }
  }

  .decoration {
    width: 60px;
    height: 3px;
    background: colors.$dark-green;
    position: absolute;
    top: 20%;
    z-index: 10;

    .circle {
      width: 20px;
      height: 20px;
      position: relative;
      border-radius: 50%;
      outline: 3px solid colors.$dark-green;
      bottom: 8px;
    }
    .pipe {
      width: 3px;
      height: 100px;
      background: colors.$dark-green;
      position: relative;
      top: 0px;
    }

    &#right {
      right: -70px;

      .circle {
        left: 115%;
      }
      .pipe {
        left: 125%;
      }
    }

    &#left {
      left: -70px;

      .circle {
        left: -44%;
      }

      .pipe {
        left: -28%;
      }
    }
  }
}
</style>
