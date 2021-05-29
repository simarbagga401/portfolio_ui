<template>
  <section>
    <h1>mobile</h1>

    <Nuxt />

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

<style scoped lang="scss"></style>

<script>
export default {
  data() {
    return {
      color: 'orange',
      width: 20,
      height: 20,
      backgroundColor: '#ff7e57',
    };
  },
};
</script>
