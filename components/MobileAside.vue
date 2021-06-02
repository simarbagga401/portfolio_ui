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
import { dynamicBackgroundColorLogic } from '~/functions/dynamicColors';
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
aside {
  height: 40%;
  align-self: end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
  align-items: flex-end;
  border-radius: 0 50px 0 0;
  background: rgb(255, 85, 85);

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
