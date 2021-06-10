<template>
  <iframe
    :src="`https://youtube.com/embed/${videoId}`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="video"
    :class="{ active }"
  ></iframe>
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
  opacity: 0.8;
  width: 500px;
  height: 281.25px;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: inherit;
    // width: 450px;
    // height: 253.13px;
  }

  &.mask-0 {
    opacity: 0.2;
  }
}
</style>
