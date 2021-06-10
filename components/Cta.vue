<template>
  <button
    class="btn"
    :style="{ width: cta.width + 'px', height: cta.height + 'px' }"
  >
    <NuxtLink :to="cta.link" :style="{ color: dynamicColor() }">{{
      cta.name
    }}</NuxtLink>
  </button>
</template>

<script>
import { dynamicIconColorLogic } from '~/functions/dynamicColors';
export default {
  props: ['cta'],
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

  a {
    // color: colors.$primary-orange;
    font-weight: typography.$medium;
  }
}
</style>
