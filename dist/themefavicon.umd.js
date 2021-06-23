(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ThemeFavicon = {}));
}(this, (function (exports) { 'use strict';

  var createFavicons = function (icons) {
    if (!window || !window.matchMedia) { return }
    // Dark theme
    var favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/x-icon';
    favicon.href = window.matchMedia('(prefers-color-scheme: dark)').matches
      // Dark Theme
      ? icons.darkThemeIcon
      // Light theme
      : icons.lightThemeIcon;

    document.head.removeChild(document.querySelector('[rel=icon]'));
    document.head.appendChild(favicon);
  };

  exports.default = createFavicons;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
