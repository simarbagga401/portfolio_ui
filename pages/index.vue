<template>
  <div class="container">
    <h1>Get Started</h1>
    <div class="mask"></div>
    <button @click="changeLayout" style="background: orange">
      changeLayout
    </button>
    <p>
      {{ size }}
    </p>
    <NuxtLink to="about">about</NuxtLink>
  </div>
</template>

<script>
import Vue from 'vue';
import { someFunction2 } from '~/functions/responsiveLayout.js';

export default Vue.extend({
  // layout: 'mobile',
  data() {
    return {
      imgSrc: '~assets/images/MaskImage1.png',
    };
  },
  methods: {
    changeLayout() {
      // toogleLayout();
    },
    someFunction(e) {
      someFunction2(e);
    },
  },
  computed: {
    size() {
      const size =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      return size;
    },
  },
  mounted() {
    window.addEventListener('resize', this.someFunction);
  },
});
</script>

<style lang="scss">
@use '~/assets/styles/typography';
@use '~/assets/styles/colors';

body {
  display: grid;
  place-items: center;
}

.mask-image-1 {
  width: 570px;
  height: 500px;
}

img {
  width: 50px;
}
p {
  font-family: typography.$sans;
}
</style>
