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

    <Nuxt class="content" />

    <Footer class="footer" />
  </section>
</template>

<style scoped lang="scss">
@use '~assets/styles/colors';

.red {
  background: red;
}
section {
  display: grid;
  grid-template-rows: 7vh 88vh 5vh;
  grid-template-columns: minmax(50px, 8vw) 92vw;
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
    // background: rgb(207, 255, 221);
  }
  .aside1 {
    grid-area: aside1;
    // background: rgb(244, 221, 255);
  }
  .footer {
    grid-area: footer;
    // background: rgb(255, 246, 218);
  }
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
