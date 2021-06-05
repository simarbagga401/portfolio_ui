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
      v-bind:click="somefunction()"
    ></div>
    <h1 v-if="displayh">displayh</h1>
    <h1>{{ compute }}</h1>
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
  methods: {
    somefunction() {
      console.log('some function');
    },
  },
  computed: {
    compute() {
      return 'hahahahh';
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';

.blogs-page {
  width: 100%;
  height: 100%;
  background: colors.$primary-orange;
}
</style>
