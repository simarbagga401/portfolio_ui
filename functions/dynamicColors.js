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

export function dynamicIconColorLogic() {
  // returns color and background value for icons

  if ($nuxt.$route.path === '/' || $nuxt.$route.path.includes('/blog')) {
    return ['#00331e', '#ff7e57'];
  } else if ($nuxt.$route.path.includes('/vlogs')) {
    return ['#002a33', '#57ffb9'];
  } else if ($nuxt.$route.path.includes('/photogallery')) {
    return ['#330c00', '#57e0ff'];
  } else {
    return ['#000000', '#ff7e57'];
  }
}
