(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ThemeFavicon = {}));
}(this, (function (exports) { 'use strict';

  var createFavicons = function (vue, icons) {
    if (!icons) {
      console.warn('Theme Favicon: no favicon URLs found.');
      return
    }
    if (!icons.darkThemeIcon) {
      console.warn('Theme Favicon: no favicon URL for dark theme found.');
      return
    }
    if (!icons.lightThemeIcon) {
      console.warn('Theme Favicon: no favicon URL for light theme found.');
      return
    }
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

    var currentIcon = document.querySelectorAll('[rel=icon]');
    console.log('current', currentIcon);
    // Check if current icon exists and is a
    if (currentIcon) {
      currentIcon.forEach(function (el) {
        el.parentNode.removeChild(el);
      });
    }
    document.head.appendChild(favicon);
  };

  exports.default = createFavicons;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
