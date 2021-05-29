<template>
  <footer class="footer">
    <h3>John Doe</h3>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/typography.scss';
@use '~/assets/styles/colors.scss';

.footer {
  width: 100%;
  height: 100%;
  background: rgb(255, 138, 138);
  padding: 0px 30px;

  h3 {
    font-size: 24px;
    font-weight: typography.$light;
  }
}
</style>
