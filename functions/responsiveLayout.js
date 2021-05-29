const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export function someFunction2(e) {
  console.log('window is resizing', e);
  // if () {

  // }
}

function toogleLayout() {
  if ($nuxt.$data.layoutName === 'default') {
    $nuxt.setLayout('mobile');
  } else {
    $nuxt.setLayout('default');
  }
}

// export function beResponsive(mobileLayout) {
//   if (mobileLayout === false && width <= 800) {
//     console.log('click to switch to mobile site');
//     mobileLayout = true;
//   }
//   if (mobileLayout === true && width >= 850) {
//     console.log('click to switch to to desktop site');
//   }
// }
