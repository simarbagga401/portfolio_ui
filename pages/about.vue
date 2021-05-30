<template>
  <div>
    <h1>about</h1>
  </div>
</template>

<script>
import { responsiveLayout } from '~/functions/responsiveLayout';
export default {
  layout: () => {
    let windowWidth = window.innerWidth;
    let answer = windowWidth < 720 ? 'mobile' : 'default';

    return answer;
  },
};
</script>

<style lang="scss" scoped></style>
