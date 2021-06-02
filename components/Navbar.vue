<template>
  <nav class="nav" :class="dynamicBackgroundColor">
    <NuxtLink class="logo" to="/" :class="dynamicColor">John Doe</NuxtLink>

    <section class="links">
      <ul>
        <li v-for="link in links" :key="link.name">
          <NuxtLink :to="link.link" :class="dynamicColor">{{
            link.name
          }}</NuxtLink>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script>
import {
  dynamicBackgroundColorLogic,
  dynamicColorLogic,
} from '~/functions/dynamicColors';

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
    dynamicBackgroundColor() {
      return dynamicBackgroundColorLogic();
    },
    dynamicColor() {
      return dynamicColorLogic();
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
