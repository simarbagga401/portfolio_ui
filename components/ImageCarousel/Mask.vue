<template>
  <div>
    <div class="img-container" :style="isActive">
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
    isActive() {
      if (this.active) {
        return {
          width: this.width + 10 + 'px',
          height: this.height + 10 + 'px',
        };
      } else {
        return { width: this.width + 'px', height: this.height + 'px' };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
