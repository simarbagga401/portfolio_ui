<template>
  <nav class="nav" :class="backgroundColor">
    <NuxtLink class="logo" to="/" :class="color">John Doe</NuxtLink>
    <button @click="clicked">click me</button>
    <section class="links">
      <ul>
        <li v-for="link in links" :key="link.name">
          <NuxtLink :to="link.link" :class="color">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'About',
          link: '/',
        },
        {
          name: 'Vlogs',
          link: '/vlogs',
        },
        {
          name: 'Blogs',
          link: '/blogs',
        },
        {
          name: 'Photo Gallery',
          link: '/photogallery',
        },
      ],
    };
  },
  computed: {
    backgroundColor() {
      return {
        'background-orange':
          this.$nuxt.$route.path === '/' ||
          this.$nuxt.$route.path.includes('/blog'),
        'background-green': this.$nuxt.$route.path.includes('/vlogs'),
        'background-blue': this.$nuxt.$route.path.includes('/photogallery'),
      };
    },
    color() {
      return {
        'color-green':
          this.$nuxt.$route.path === '/' ||
          this.$nuxt.$route.path.includes('/blog'),
        'color-blue': this.$nuxt.$route.path.includes('/vlogs'),
        'color-orange': this.$nuxt.$route.path.includes('/photogallery'),
      };
    },
  },
  methods: {
    clicked() {
      console.log('hurray you just clicked me');
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/typography.scss';
@use '~/assets/styles/colors.scss';

.nav {
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  .links {
    width: 80%;
  }

  ul {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    justify-self: flex-start;
  }

  a {
    font-size: 16px;

    &.nuxt-link-exact-active:not(.logo) {
      border-bottom: 3px solid colors.$dark-green;
    }
  }

  .logo {
    font-family: typography.$serif;
    font-weight: typography.$bold;
    display: inline-block;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 22px;
  }
}
</style>
