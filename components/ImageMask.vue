<template>
  <div>
    <div
      class="img-container"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <img
        :src="require(`~/assets/images/${imageName}.png`)"
        alt=""
        class="img"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['width', 'height'],
  data() {
    return {
      imageName: 'Stock2',
    };
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
  }
}
</style>
