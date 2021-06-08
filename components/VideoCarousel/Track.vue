<template>
  <div class="track">
    <div class="left-btn">
      <slot name="left-btn" />
    </div>

    <div class="left">
      <slot name="left" />
    </div>

    <div class="center">
      <slot name="center" />
    </div>

    <div class="right">
      <slot name="right" />
    </div>

    <div class="right-btn">
      <slot name="right-btn" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.track {
  display: flex;
  background: rgb(71, 82, 233);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;

  .left {
    transform: translateX(20px);
  }

  .right {
    transform: translateX(-20px);
  }

  .center {
    z-index: 10;
  }
}
</style>
