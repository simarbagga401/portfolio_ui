<template>
  <div>
    <div class="img-container" :class="{ active: active }">
      <h1>{{ active }}</h1>
      <img
        :src="require(`~/assets/images/${imageName}`)"
        alt="image"
        class="img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCarouselImageMask',
  props: ['width', 'height', 'imageName', 'active'],
  computed: {
    // isActive() {
    //   if (this.active) {
    //     return {
    //       width: this.width + 100 + 'px',
    //       height: this.height + 100 + 'px',
    //     };
    //   } else {
    //     return { width: this.width + 'px', height: this.height + 'px' };
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.img-container {
  max-width: 270px;
  max-height: 270px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
  }
}
</style>
