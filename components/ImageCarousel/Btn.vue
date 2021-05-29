<template>
  <div>
    <div class="btn">
      <span v-if="btnActive" class="btn-active"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['btnActive'],
};
</script>

<style lang="scss" scoped>
@use '../../assets/styles/colors';
@use 'sass:math';
$btn-width: 30px;

.btn {
  width: $btn-width;
  height: $btn-width;
  border: 2px solid colors.$primary-black;
  border-radius: 50%;
  display: grid;
  place-items: center;
}
.btn-active {
  border-radius: 50%;
  width: math.div($btn-width, 1.5);
  height: math.div($btn-width, 1.5);
  background: colors.$primary-black;
  z-index: 10;
}
</style>
