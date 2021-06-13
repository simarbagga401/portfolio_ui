export function isCurrentRoute(route) {
  if ($nuxt.$route.path === '/' && route == 'about') {
    return true;
  }
  if ($nuxt.$route.path.toString().includes('/blogs') && route == 'blogs') {
    return true;
  }
  if ($nuxt.$route.path.toString().includes('/vlogs') && route == 'vlogs') {
    return true;
  }
  if (
    $nuxt.$route.path.toString().includes('/photogallery') &&
    route == 'photogallery'
  ) {
    return true;
  }
}
