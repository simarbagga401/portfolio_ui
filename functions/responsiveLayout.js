const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export function responsiveLayout() {
  if (width <= 720) {
    toogle('mobile');
    console.log(
      '%c To See Desktop Site Refresh After Setting Window Width Above 800',
      'color:black;background:orange'
    );
  } else {
    console.log(
      '%c To See Mobile Site Refresh After Setting Window Width Below 800',
      'color:black;background:orange'
    );

    toogle('default');
  }
}

function toogle(layout) {
  if (layout === 'default') {
    $nuxt.setLayout('default');
  } else {
    $nuxt.setLayout('mobile');
  }
}
