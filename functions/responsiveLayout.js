const windowWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export function alertResponsiveLayout() {
  if (windowWidth <= 800) {
    console.log(
      '%c To See Desktop Site Refresh After Setting Window Width Above 800',
      'color:black;background:orange'
    );
  } else {
    console.log(
      '%c To See Mobile Site Refresh After Setting Window Width Below 800',
      'color:black;background:orange'
    );
  }
}

export function responsiveLayout() {
  let layout = windowWidth < 800 ? 'mobile' : 'default';

  return layout;
}
