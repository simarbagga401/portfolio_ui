export function dynamicBackgroundColorLogic() {
  return {
    'background-orange':
      $nuxt.$route.path === '/' || $nuxt.$route.path.includes('/blog'),
    'background-green': $nuxt.$route.path.includes('/vlogs'),
    'background-blue': $nuxt.$route.path.includes('/photogallery'),
  };
}

export function dynamicColorLogic() {
  return {
    'color-green':
      $nuxt.$route.path === '/' || $nuxt.$route.path.includes('/blog'),
    'color-blue': $nuxt.$route.path.includes('/vlogs'),
    'color-orange': $nuxt.$route.path.includes('/photogallery'),
  };
}
