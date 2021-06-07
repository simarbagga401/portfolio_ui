<template>
  <!-- <div> -->
  <div class="img-container" :class="{ active: active }">
    <img
      :src="require(`~/assets/images/${imageName}`)"
      alt="image"
      class="img"
    />
  </div>
  <!-- </div> -->
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
  width: 40%;
  height: 40%;
  transition: all 0.5s ease-in-out;
  margin: 0px;
  padding: 30px;

  &.active {
    width: 50%;
    height: 50%;

    @media (max-width: 950px) {
      width: 40%;
      height: 40%;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
  }
}
</style>
