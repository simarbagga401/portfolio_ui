<template>
  <section class="blogs-page overflow">
    <template v-for="(blog, i) in blogs">
      <BlogPreview
        :imageName="blog.imageName"
        :heading="blog.heading"
        :description="blog.description"
        :decorationHeight="150"
        :date="blog.date"
        :direction="setBlogDirection(i)"
        :key="i"
      />
    </template>
  </section>
</template>

<script>
import {
  responsiveLayout,
  alertResponsiveLayout,
} from '~/functions/responsiveLayout';

export default {
  layout: responsiveLayout(),
  mounted() {
    alertResponsiveLayout();
  },
  data() {
    return {
      blogs: [
        {
          imageName: 'Stock2.png',
          heading: 'How To Start Blogging',
          description:
            'Lorem ipsum dolor sit amet consecteteligendi at nobis ex totam repellendus deleniti officia.',
          date: '30.5.2019',
        },
        {
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

.blogs-page {
  width: 100%;
  height: 100%;
  background: colors.$primary-orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
