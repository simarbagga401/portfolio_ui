<template>
  <aside>
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
};
</script>

<style lang="scss" scoped>
aside {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
  align-items: flex-end;
  background: rgb(172, 172, 172);
  border-radius: 0 50px 0 0;

  ul {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: rgb(231, 231, 231);
  }
}
</style>
