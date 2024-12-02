(function () {
	function getThemeUser() {
		if (localStorage.theme === 'light')	return 'light';
		if (localStorage.theme === 'dark') return 'dark';

		if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
		else return 'light';
	}

	const themeUser = getThemeUser();
	if (themeUser === 'dark') {
		document.documentElement.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	}
})();



