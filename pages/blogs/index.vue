<template>
  <div class="blog-carousel-track-wrapper">
    <BlogTrack :blogs="blogs" />
  </div>
</template>

<script>
import { responsiveLayout, alertResponsiveLayout } from '~/js/responsiveLayout';

export default {
  layout: responsiveLayout(),
  mounted() {
    alertResponsiveLayout();
  },
  data() {
    return {
      blogs: [
        {
          id: 0,
          imageName: 'Stock2.png',
          heading: 'How To Start Blogging',
          description:
            'Lorem ipsum dolor sit amet consecteteligendi at nobis ex totam repellendus deleniti officia.',
          date: '30.5.2019',
        },
        {
          id: 1,
          imageName: 'Stock3.png',
          heading:
            '10 Amazing Secrets About Vlogging People Don’t Want You To Know !',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dignissimos! Maiores nulla temporibus autem vel nostrum voluptas, harum non consequuntur tempore iusto eligendi at nobis ex totam repellendus deleniti officia.',
          date: '30.5.2019',
        },
        {
          id: 2,
          imageName: 'Stock2.png',
          heading: 'How To Start Blogging',
          description:
            'Lorem ipsum dolor sit amet consecteteligendi at nobis ex totam repellendus deleniti officia.',
          date: '30.5.2019',
        },
        {
          id: 3,
          imageName: 'Stock3.png',
          heading:
            '10 Amazing Secrets About Vlogging People Don’t Want You To Know !',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dignissimos! Maiores nulla temporibus autem vel nostrum voluptas, harum non consequuntur tempore iusto eligendi at nobis ex totam repellendus deleniti officia.',
          date: '30.5.2019',
        },
      ],
      blogs2: [
        {
          id: 0,
          imageName: 'Stock2.png',
          heading: 'How To Start Blogging',
          description:
            'Lorem ipsum dolor sit amet consecteteligendi at nobis ex totam repellendus deleniti officia.',
          date: '30.5.2019',
        },
        {
          id: 1,
          imageName: 'Stock3.png',
          heading:
            '10 Amazing Secrets About Vlogging People Don’t Want You To Know !',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dignissimos! Maiores nulla temporibus autem vel nostrum voluptas, harum non consequuntur tempore iusto eligendi at nobis ex totam repellendus deleniti officia.',
          date: '30.5.2019',
        },
      ],
    };
  },
  methods: {
    setBlogDirection(i) {
      return i % 2 == 0 ? 'right' : 'left';
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';

// .blogs-page {
//   width: 100%;
//   height: 100%;
//   background: colors.$primary-orange;
// }

.blog-carousel-track-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 13;
  background: colors.$primary-orange;
}
</style>
