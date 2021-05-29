<template>
  <div>
    <nav>
      <ul>
        <li v-for="link in links" :key="link.name">
          <NuxtLink :to="link.link">
            <slot :name="link.name" />
            <p>{{ link.displayName }}</p>
          </NuxtLink>
        </li>
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
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0px 0px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li {
    width: 80px;
    height: 100%;
    background: rgb(255, 186, 186);
    display: flex;
    align-content: space-between;
    justify-content: center;
  }

  p {
    font-size: 12px;
  }
}
</style>
