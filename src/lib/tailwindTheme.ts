export function setSystemTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.removeItem('theme')
}
export function setDarkTheme() {
  document.documentElement.classList.add('dark')
  localStorage.setItem('theme', 'dark')
}
export function setLightTheme() {
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light'
}
export function setUserTheme() {
  switch (localStorage.theme) {
    case 'light':
      setLightTheme()
      break;
    case 'dark':
      setDarkTheme()
      break;
    default:
      setSystemTheme()
      break;
  }
}
export function getThemeUser():string {
  if (localStorage.theme === 'light') {
    return 'light'
  }
  if (localStorage.theme === 'dark') {
    return 'dark'
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  } else {
    return 'light'
  }
}
