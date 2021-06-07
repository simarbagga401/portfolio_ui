<template>
  <!-- <div> -->
  <div class="img-container" :class="{ active: active }">
    <h1>{{ active }}</h1>
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
  width: 50%;
  height: 50%;
  transition: all 0.5s ease-in-out;
  background: rgb(117, 117, 117);
  margin: 0px;
  transform: translateX(100px);
  padding: 30px;

  &.active {
    width: 60%;
    height: 60%;
    transform: translateX(-100px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
  }
}
</style>
