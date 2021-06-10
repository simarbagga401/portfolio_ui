<template>
  <div>
    <div class="img-container">
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
  props: ['width', 'height', 'imageName'],
};
</script>

<style lang="scss" scoped>
.img-container {
  background: rgb(255, 138, 138);
  border-radius: 20px;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    background: transparent;
  }
}
</style>
