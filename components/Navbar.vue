<template>
  <nav class="nav">
    <NuxtLink class="logo" to="/">John Doe</NuxtLink>

    <section class="links">
      <ul>
        <li v-for="link in links" :key="link.name">
          <NuxtLink :to="link.link">{{ link.name }}</NuxtLink>
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
          link: '/about',
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
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/typography.scss';
@use '~/assets/styles/colors.scss';

.nav {
  padding: 0px 20px;
  background: rgb(255, 173, 173);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  .links {
    width: 80%;
    background: rgb(216, 216, 216);
  }

  ul {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    justify-self: flex-start;
  }

  a {
    color: colors.$dark-green;
    font-size: 16px;

    &:hover:not(.logo),
    &:active:not(.logo) {
      color: colors.$secondary-green;
    }

    &.nuxt-link-active:not(.logo) {
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
