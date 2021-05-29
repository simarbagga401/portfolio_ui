<template>
  <div>
    <div class="div">
      <!-- <img :src="src" :style="{ width: width, height: height }" /> -->
    </div>
    <div class="box" :style="maskStyle">box</div>
  </div>
</template>

<script>
export default {
  props: ['imageSrc', 'width', 'height'],
  data() {
    return {
      width2: 100,
      height2: 100,
      // src: '../assets/images/Stock5',
    };
  },
  computed: {
    maskStyle() {
      return `width:${this.width2}px; height:${this.height2}px; background-color:orange;`;
    },
  },
};
</script>

<style lang="scss" scoped>
.div {
  width: 300px;
  height: 300px;
  // background: url('@/assets/images/Stock2.png');
}
</style>
