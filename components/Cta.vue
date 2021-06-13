<template>
  <button class="btn" :style="{ width: width + 'px', height: height + 'px' }">
    <NuxtLink :to="link" :style="{ color: dynamicColor() }">{{
      name
    }}</NuxtLink>
  </button>
</template>

<script>
import { dynamicIconColorLogic } from '~/js/dynamicColors';
export default {
  props: ['width', 'height', 'link', 'name'],
  methods: {
    dynamicColor() {
      return dynamicIconColorLogic()[2];
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';
@use '~/assets/styles/typography';

.btn {
  width: 100px;
  min-height: 40px;
  background: colors.$primary-black;
  margin-top: 15px;

  &:hover,
  &:active {
    background: colors.$light-black;
  }
  a {
    // color: colors.$primary-orange;
    font-weight: typography.$medium;
  }
}
</style>
