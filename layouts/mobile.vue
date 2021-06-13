<template>
  <section>
    <header class="header" />

    <Nuxt class="content" />

    <!-- Aside -->

    <MobileAside class="aside">
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
    </MobileAside>

    <!-- Navbar -->

    <MobileNav class="nav">
      <template v-slot:about>
        <IconsTwitter
          :color="dynamicIconColor"
          :width="width"
          :height="height"
        />
      </template>

      <template v-slot:vlogs>
        <IconsYoutube
          :color="dynamicIconColor"
          :width="width"
          :height="height"
        />
      </template>

      <template v-slot:blogs>
        <IconsBlog
          :color="dynamicIconColor"
          :width="width"
          :height="height"
          :backgroundColor="dynamicIconBackgroundColor"
        />
      </template>

      <template v-slot:photoGallery>
        <IconsPhotoGallery
          :color="dynamicIconColor"
          :width="width"
          :height="height"
          :backgroundColor="dynamicIconBackgroundColor"
        />
      </template>
    </MobileNav>
  </section>
</template>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: minmax(45px, 15vw) 85vw;
  grid-template-rows: 5vh 85vh 10vh;
  grid-template-areas:
    'header header'
    'aside content'
    'nav nav';
}

.header {
  grid-area: header;
  background: rgb(255, 185, 185);
}

.content {
  grid-area: content;
  background: rgb(207, 255, 221);
}

.aside {
  grid-area: aside;
  // background: rgb(244, 221, 255);
  z-index: 10;
}

.nav {
  grid-area: nav;
  // background: rgb(255, 211, 211);
}
</style>

<script>
import { dynamicIconColorLogic } from '~/js/dynamicColors';
export default {
  data() {
    return {
      width: 22,
      height: 22,
    };
  },
  computed: {
    dynamicIconColor() {
      return dynamicIconColorLogic()[0];
    },
    dynamicIconBackgroundColor() {
      return dynamicIconColorLogic()[1];
    },
  },
};
</script>
