<template>
  <section class="blogs-page overflow">
    <!-- <template v-for="(blog, i) in blogs">
      <BlogPreview
        :imageName="blog.imageName"
        :heading="blog.heading"
        :description="blog.description"
        :decorationHeight="150"
        :date="blog.date"
        :direction="setBlogDirection(i)"
        :key="i"
      />
    </template> -->

    <template v-for="(blog, i) in blogs">
      <section class="preview-left" :key="blog.id">
        <BlogPreview
          v-if="setBlogDirection(i) == 'left'"
          :imageName="blog.imageName"
          :heading="blog.heading"
          :description="blog.description"
          :decorationHeight="150"
          :date="blog.date"
          :direction="setBlogDirection(i)"
          :id="blog.id"
        />
      </section>

      <section class="preview-right" :key="blog.id + 1000">
        <BlogPreview
          v-if="setBlogDirection(i) == 'right'"
          :imageName="blog.imageName"
          :heading="blog.heading"
          :description="blog.description"
          :decorationHeight="150"
          :date="blog.date"
          :direction="setBlogDirection(i)"
          :id="blog.id"
        />
      </section>
    </template>
  </section>
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

.blogs-page {
  width: 100%;
  height: 100%;
  background: colors.$primary-orange;
  display: grid;
  grid-template-columns: 1fr 0.22fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'left - right';
}

.preview-left {
  grid-area: left;
  background: rgb(255, 196, 196);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.preview-right {
  grid-area: right;
  background: rgb(192, 209, 255);
}
</style>
