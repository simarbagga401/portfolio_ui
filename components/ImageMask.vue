<template>
  <section>
    <div
      class="img-container"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <img
        :src="require(`~/assets/images/${imageName}`)"
        alt="image"
        class="img"
      />
    </div>

    <div v-if="decorationDirection == 'right'" class="decoration" id="right">
      <div class="circle" />
      <div class="pipe" :style="{ height: pipeHeight + 'px' }" />
    </div>

    <div v-if="decorationDirection == 'left'" class="decoration" id="left">
      <div class="circle" />
      <div class="pipe" :style="{ height: pipeHeight + 'px' }" />
    </div>
  </section>
</template>

<script>
export default {
  props: ['width', 'height', 'imageName', 'decorationDirection', 'pipeHeight'],
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';

section {
  position: relative;
  background: rgb(255, 86, 86);
}

.img-container {
  background: rgb(255, 138, 138);
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    background: transparent;
  }
}

.decoration {
  width: 80px;
  height: 3px;
  background: colors.$dark-green;
  position: absolute;
  top: 20%;

  .circle {
    width: 25px;
    height: 25px;
    position: relative;
    border-radius: 50%;
    outline: 3px solid colors.$dark-green;
    bottom: 12px;
  }
  .pipe {
    width: 3px;
    height: 100px;
    background: colors.$dark-green;
    position: relative;
    top: 0px;
  }

  &#right {
    right: -90px;

    .circle {
      left: 110%;
    }
    .pipe {
      left: 125%;
    }
  }

  &#left {
    left: -90px;

    .circle {
      left: -40%;
    }

    .pipe {
      left: -25%;
    }
  }
}
</style>
