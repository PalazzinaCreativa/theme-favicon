# theme-favicon
Vue plugin to switch favicon on browser dark or light theme
## Installation
```
npm i @palazzinacreativa/theme-favicon
```
or
```
yarn add @palazzinacreativa/theme-favicon

```
Then you can install your plugin using favicons url as paramaters

...
import themeFavicon from '@palazzinacreativa/theme-favicon'

Vue.use(themeFavicon, {
  lightThemeIcon: '/path-to/light-theme-favicon.ico',
  darkThemeIcon: '/path-to/dark-theme-favicon.ico'
})
...
```
