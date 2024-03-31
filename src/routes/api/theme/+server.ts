import { themes } from './colorTheme.js';

export async function GET({ url }) {
	const theme = url.searchParams.get('theme') ?? 'Dracula';

	const indexOfTheSelectedColorTheme = themes.findIndex(({ name }) => name === theme);
	const { colors, tokenColors } = themes[indexOfTheSelectedColorTheme];

	// css Tokends
	const cssTokendColors: string = tokenColors
		.map(({ scope, settings }): string => {
			const selectores: string = scope.map((sc) => `[data-token^="${sc}"]`).join(',');
			const styles: string[] = [];
			if (settings.foreground !== undefined) {
				styles.push(`color: ${settings.foreground}`);
			}
			if (settings.fontStyle !== undefined) {
				const props = settings.fontStyle.split(/\s/);
				const underlineAndStikethrough: string[] = [];
				props.forEach((prop) => {
					switch (prop) {
						case 'italic':
							styles.push(`font-style: italic`);
							break;
						case 'bold':
							styles.push(`font-weight: bold`);
							break;
						case 'underline':
							underlineAndStikethrough.push('underline');
							break;
						case 'stikethrough':
							underlineAndStikethrough.push('line-through');
							break;
					}
				});
				if (underlineAndStikethrough.length > 0) {
					styles.push(`text-decoration: ${underlineAndStikethrough.join(' ')}`);
				}
			}
			if (settings.background !== undefined) {
				styles.push(`background: ${settings.background}`);
			}
			const stylesInText = styles.join(';');
			return `${selectores}{${stylesInText}}`;
		})
		.join('\n');

	// ConfigCode Colors Variables
	const textBackgroundRegExp = /background/i;
	const textForegroundRegExp = /foreground/i;
	const textBorderRegExp = /border/i;

	const varsColors: string = Object.entries(colors)
		.map(([key, color]) => {
			if (textBackgroundRegExp.test(key)) {
				return `[data-token^="${key}"]{background:${color}}`;
			}
			if (textForegroundRegExp.test(key)) {
				return `[data-token^="${key}"]{color:${color}}`;
			}
			if (textBorderRegExp.test(key)) {
				return `[data-token^="${key}"]{border-color:${color}}`;
			}
			return [
				`[data-token^="${key}"]{background:${color}}`,
				`[data-token^="${key}"]{color:${color}}`,
				`[data-token^="${key}"]{border:${color}}`
			].join('\n');
		}).join('\n');

	return new Response(`${varsColors}\n${cssTokendColors}`, {
		headers: {
			'Content-Type': 'text/css'
		}
	}); // respuesta al get
}
