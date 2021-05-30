<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="1.99997" width="20" height="13" :fill="color" />
      <path
        d="M22.9091 0H1.09091C0.801582 0 0.524105 0.111942 0.31952 0.311199C0.114935 0.510457 0 0.780707 0 1.0625V15.9375C0 16.2193 0.114935 16.4895 0.31952 16.6888C0.524105 16.8881 0.801582 17 1.09091 17H22.9091C23.1984 17 23.4759 16.8881 23.6805 16.6888C23.8851 16.4895 24 16.2193 24 15.9375V1.0625C24 0.780707 23.8851 0.510457 23.6805 0.311199C23.4759 0.111942 23.1984 0 22.9091 0ZM21.8182 14.875H2.18182V2.125H21.8182V14.875Z"
        :fill="color"
      />
      <line
        x1="4.5"
        y1="5.49997"
        x2="11.5"
        y2="5.49997"
        :stroke="backgroundColor"
        stroke-linecap="round"
      />
      <line
        x1="4.5"
        y1="8.5"
        x2="16.5"
        y2="8.5"
        :stroke="backgroundColor"
        stroke-linecap="round"
      />
      <line
        x1="4.5"
        y1="11.5"
        x2="19.5"
        y2="11.5"
        :stroke="backgroundColor"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ['color', 'backgroundColor', 'width', 'height'],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
