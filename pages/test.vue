<template>
  <div>
    <button @click="show()">click</button>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      console.log('show');
    },
  },
};
</script>

<style lang="scss" scoped></style>
