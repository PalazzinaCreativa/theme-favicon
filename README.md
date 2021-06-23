# theme-favicon
Vue plugin to use different favicons on dark or light theme based on browser preference.
## Installation
```
npm i @palazzinacreativa/theme-favicon
```
or
```
yarn add @palazzinacreativa/theme-favicon

```

Then you can install your plugin using favicons url as paramaters
```
...
import Vue from 'vue'
import themeFavicon from '@palazzinacreativa/theme-favicon'

Vue.use(themeFavicon, {
  lightThemeIcon: '/path-to/light-theme-favicon.ico',
  darkThemeIcon: '/path-to/dark-theme-favicon.ico'
})
...
```
