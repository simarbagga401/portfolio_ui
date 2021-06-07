<template>
  <div>
    <iframe
      :src="`https://youtube.com/embed/${videoId}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="video"
      :class="{ active }"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['videoId', 'active'],
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';

.video {
  border: 6px solid colors.$light-black;
  border-radius: 10px;
  opacity: 0.5;
  width: 270px;
  height: 151.88;

  &.active {
    opacity: 1;
    // width: 450px;
    // height: 253.13px;
    width: 470px;
    height: 264.38px;
  }
}
</style>
