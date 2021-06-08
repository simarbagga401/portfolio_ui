import { isCurrentRoute } from './isCurrentRoute';

export function dynamicBackgroundColorLogic() {
  return {
    'background-orange': isCurrentRoute('about') || isCurrentRoute('blogs'),
    'background-green': isCurrentRoute('vlogs'),
    'background-blue': isCurrentRoute('photogallery'),
  };
}

export function dynamicColorLogic() {
  return {
    'color-green': isCurrentRoute('about') || isCurrentRoute('blogs'),
    'color-blue': isCurrentRoute('vlogs'),
    'color-orange': isCurrentRoute('photogallery'),
  };
}

export function dynamicIconColorLogic() {
  // returns color and background value for icons
  // arr[0] == dark-color;  arr[1] == secondary-color;  arr[1] == primary-color

  if (isCurrentRoute('about') || isCurrentRoute('blogs')) {
    return ['#00331e', '#ff7e57', '#ffb9a3'];
  } else if (isCurrentRoute('vlogs')) {
    return ['#002a33', '#57ffb9', '#a3ffd9'];
  } else if (isCurrentRoute('photogallery')) {
    return ['#330c00', '#57e0ff', '#a3eeff'];
  } else {
    return ['#330c00', '#57e0ff', '#a3eeff'];
  }
}
