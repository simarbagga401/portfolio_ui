<template>
  <section>
    <nav>
      <Navbar />
    </nav>
    <div class="content">
      <Nuxt />
    </div>
    <aside class="aside1">
      <Sidebar />
    </aside>
    <aside class="aside2">
      <Sidebar />
    </aside>
    <footer>
      <Footer />
    </footer>
  </section>
</template>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: minmax(50px, 7vw) 86vw minmax(50px, 7vw);
  grid-template-rows: 7vh 88vh 5vh;
  grid-template-areas:
    'nav nav nav'
    'aside1 content aside2'
    'footer footer footer';

  nav {
    grid-area: nav;
    background: rgb(255, 145, 145);
  }
  .content {
    grid-area: content;
    // background: rgb(145, 255, 178);
  }
  .aside1 {
    grid-area: aside1;
    // background: rgb(220, 145, 255);
  }
  .aside2 {
    grid-area: aside2;
    // background: rgb(255, 145, 228);
  }
  footer {
    grid-area: footer;
    // background: rgb(145, 255, 200);
  }
}
</style>
