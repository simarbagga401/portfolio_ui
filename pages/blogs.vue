<template>
  <section class="blogs-page">
    <div
      style="
        width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: lightblue;
        margin: 10px;
      "
    ></div>
    <h1 style="font-size: 100px">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
      voluptates velit repellendus accusantium distinctio iste, nesciunt
      doloribus perferendis, nam dicta ea inventore suscipit excepturi animi,
      odio ut adipisci placeat ipsum? Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Ea, quos! Repellat inventore omnis consequatur
      perspiciatis eius dicta alias sequi neque eum! Eum nulla, nobis expedita
      esse repudiandae at fugiat quod?
    </h1>
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
  data() {
    return {
      displayh: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';

.blogs-page {
  width: 100%;
  height: 100%;
  background: colors.$primary-orange;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
