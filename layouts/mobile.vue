<template>
  <section>
    <header class="header" />

    <Nuxt class="content" />

    <!-- Aside -->

    <MobileAside class="aside">
      <template v-slot:instagram>
        <IconsInstagram :color="color" :width="width" :height="height" />
      </template>

      <template v-slot:tiktok>
        <IconsTiktok :color="color" :width="width" :height="height" />
      </template>

      <template v-slot:youtube>
        <IconsYoutube :color="color" :width="width" :height="height" />
      </template>

      <template v-slot:twitter>
        <IconsTwitter :color="color" :width="width" :height="height" />
      </template>
    </MobileAside>

    <!-- Navbar -->

    <MobileNav class="nav">
      <template v-slot:about>
        <IconsTwitter :color="color" :width="width" :height="height" />
      </template>

      <template v-slot:vlogs>
        <IconsYoutube :color="color" :width="width" :height="height" />
      </template>

      <template v-slot:blogs>
        <IconsBlog
          :color="color"
          :width="width"
          :height="height"
          :backgroundColor="backgroundColor"
        />
      </template>

      <template v-slot:photoGallery>
        <IconsPhotoGallery
          :color="color"
          :width="width"
          :height="height"
          :backgroundColor="backgroundColor"
        />
      </template>
    </MobileNav>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(40px, 15vw) 85vw;
  grid-template-rows: 10vh 80vh 10vh;
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
  background: rgb(244, 221, 255);
}

.nav {
  grid-area: nav;
  background: rgb(255, 211, 211);
}
</style>

<script>
export default {
  data() {
    return {
      color: '#00311e',
      width: 22,
      height: 22,
      backgroundColor: '#ff7e57',
    };
  },
};
</script>
