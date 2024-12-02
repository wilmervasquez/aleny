const enum Theme { light = 'light', dark = 'dark'}

const ThemeStore = {
	theme: 'light',
  load() {

  },
  setDarkTheme() {
    document.documentElement.classList.add(Theme.dark)
    this.theme = Theme.dark
    localStorage.setItem('theme', this.theme)
  },
  setLightTheme() {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  },
  setSystemTheme(){
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.removeItem('theme')
  },
  getThemeUser():string {
    if (localStorage.theme === 'light') return 'light'
    if (localStorage.theme === 'dark') return 'dark'

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    else return 'light'
  },
  setUserTheme() {
    switch (this.theme) {
      case 'light':
        this.setLightTheme()
        break;
      case 'dark':
        this.setDarkTheme()
        break;
      default:
        this.setSystemTheme()
        break;
    }
  }
}

ThemeStore.load()

export { ThemeStore }





