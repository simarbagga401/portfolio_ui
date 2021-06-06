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

  if (isCurrentRoute('about') || isCurrentRoute('blogs')) {
    return ['#00331e', '#ff7e57'];
  } else if (isCurrentRoute('vlogs')) {
    return ['#002a33', '#57ffb9'];
  } else if (isCurrentRoute('photogallery')) {
    return ['#330c00', '#57e0ff'];
  } else {
    return ['#330c00', '#57e0ff'];
  }
}
