<template>
  <section>
    <Navbar class="nav" />

    <Aside class="aside1">
      <template v-slot:instagram>
        <IconsInstagram
          :color="dynamicIconColor"
          :width="width"
          :height="height"
        />
      </template>

      <template v-slot:tiktok>
        <IconsTiktok
          :color="dynamicIconColor"
          :width="width"
          :height="height"
        />
      </template>

      <template v-slot:youtube>
        <IconsYoutube
          :color="dynamicIconColor"
          :width="width"
          :height="height"
        />
      </template>

      <template v-slot:twitter>
        <IconsTwitter
          :color="dynamicIconColor"
          :width="width"
          :height="height"
        />
      </template>
    </Aside>

    <div class="content">
      <Nuxt />
    </div>

    <Footer class="footer" />
  </section>
</template>

<style scoped lang="scss">
@use '~assets/styles/classes';
@use '~assets/styles/colors';
@use '~assets/styles/typography';

section {
  width: 100vw;
  height: 100vh;
  // overflow: hidden; // set in production for no overflow
  display: grid;
  grid-template-rows: 7% 88% 5%;
  grid-template-columns: 8% 92%;
  grid-template-areas:
    'nav nav nav'
    'aside1 content content'
    'footer footer footer';

  .nav {
    grid-area: nav;
    // background: rgb(255, 211, 211);
  }
  .content {
    grid-area: content;
    background: colors.$primary-black;
  }
  .aside1 {
    grid-area: aside1;
    // background: rgb(244, 221, 255);
    z-index: 10;
  }
  .footer {
    grid-area: footer;
    // background: rgb(255, 246, 218);
    z-index: 10;
  }
}

h1 {
  font-family: typography.$serif;
  color: white;
  font-size: 40px;
}
</style>

<script>
import { dynamicIconColorLogic } from '~/functions/dynamicColors';
export default {
  data() {
    return {
      width: 20,
      height: 20,
    };
  },
  methods: {},
  computed: {
    dynamicIconColor() {
      return dynamicIconColorLogic()[0];
    },
  },
};
</script>
