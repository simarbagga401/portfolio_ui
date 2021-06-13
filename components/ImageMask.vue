<template>
  <section>
    <div
      class="img-container"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <img
        :src="require(`~/assets/images/${imageName}`)"
        alt="image"
        class="img"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'width',
    'height',
    'imageName',
    'decorationDirection',
    'decorationHeight',
  ],
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';

section {
  position: relative;
  margin: 25px 0;
  z-index: 10;
}

.img-container {
  width: 100%;
  height: 100%;
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
