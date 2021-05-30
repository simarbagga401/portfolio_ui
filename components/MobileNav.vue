<template>
  <div>
    <nav>
      <ul>
        <template v-for="link in links">
          <NuxtLink :to="link.link" class="nuxt-link" :key="link.name">
            <li>
              <slot :name="link.name" />
              <p>{{ link.displayName }}</p>
            </li>
          </NuxtLink>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['icon'],
  data() {
    return {
      links: [
        {
          displayName: 'About',
          name: 'about',
          link: '/about',
        },
        {
          displayName: 'Vlogs',
          name: 'vlogs',
          link: '/vlogs',
        },
        {
          displayName: 'Blogs',
          name: 'blogs',
          link: '/blogs',
        },
        {
          displayName: 'Photo Gallery',
          name: 'photoGallery',
          link: '/photogallery',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';

nav {
  background: colors.$secondary-orange;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0px 0px;

  ul {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .nuxt-link {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    li {
      width: 100%;
      height: 100%;
      background: colors.$secondary-orange;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 0px;
      border-radius: 7px 7px 0 0;
    }

    &.nuxt-link-active {
      li {
        background: colors.$active-orange;
      }
    }
  }

  p {
    font-size: 12px;
  }
}
</style>
