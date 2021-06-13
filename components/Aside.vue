<template>
  <aside :class="dynamicBackgroundColor">
    <ul v-for="link in links" :key="link.name">
      <li>
        <a :href="link.link" :class="link.name" class="link">
          <slot :name="link.name" />
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { dynamicBackgroundColorLogic } from '~/js/dynamicColors';

export default {
  data() {
    return {
      links: [
        {
          name: 'youtube',
          link: '#',
        },
        {
          name: 'instagram',
          link: '#',
        },
        {
          name: 'tiktok',
          link: '#',
        },
        {
          name: 'twitter',
          link: '#',
        },
      ],
    };
  },
  computed: {
    dynamicBackgroundColor() {
      return dynamicBackgroundColorLogic();
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/classes.scss';

aside {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
  align-items: flex-end;

  ul {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
