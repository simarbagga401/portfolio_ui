<template>
  <footer class="footer" :class="dynamicBackgroundColor">
    <h3 :class="dynamicColor">John Doe</h3>
  </footer>
</template>

<script>
import {
  dynamicBackgroundColorLogic,
  dynamicColorLogic,
} from '~/js/dynamicColors';
export default {
  computed: {
    dynamicBackgroundColor() {
      return dynamicBackgroundColorLogic();
    },
    dynamicColor() {
      return dynamicColorLogic();
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/typography.scss';
@use '~/assets/styles/colors.scss';
@use '~/assets/styles/classes.scss';

.footer {
  padding: 0px 30px;

  h3 {
    font-size: 24px;
    font-weight: typography.$light;
  }
}
</style>
