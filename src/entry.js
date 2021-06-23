const createFavicons = (icons) => {
  if (!icons) {
    console.warn('Theme Favicon: no favicon URLs found.')
    return
  }
  if (!icons.darkThemeIcon) {
    console.warn('Theme Favicon: no favicon URL for dark theme found.')
    return
  }
  if (!icons.lightThemeIcon) {
    console.warn('Theme Favicon: no favicon URL for light theme found.')
    return
  }
  if (!window || !window.matchMedia) return
  // Dark theme
  const favicon = document.createElement('link')
  favicon.rel = 'icon'
  favicon.type = 'image/x-icon'
  favicon.href = window.matchMedia('(prefers-color-scheme: dark)').matches
    // Dark Theme
    ? icons.darkThemeIcon
    // Light theme
    : icons.lightThemeIcon

  document.head.removeChild(document.querySelector('[rel=icon]'))
  document.head.appendChild(favicon)
}

export default createFavicons