<template>
  <div>content</div>
</template>

<script>
import { responsiveLayout } from '~/functions/responsiveLayout';

export default {
  beforeCreate() {
    responsiveLayout();
  },
};
</script>

<style lang="scss" scoped></style>
