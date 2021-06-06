<template>
  <section class="vlogs-page">
    <h1>vlogs</h1>
    <div
      style="
        width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: lightblue;
        margin: 10px;
      "
    ></div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique fuga
    soluta non sint cum asperiores illo vitae corrupti mollitia iure veniam, ex
    placeat id ab aliquam, quia necessitatibus! Accusamus, enim.
  </section>
</template>

<script>
import {
  responsiveLayout,
  alertResponsiveLayout,
} from '~/functions/responsiveLayout';

export default {
  layout: responsiveLayout(),
  mounted() {
    alertResponsiveLayout();
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';
.vlogs-page {
  width: 100%;
  height: 100%;
  background: colors.$primary-green;
}
</style>
