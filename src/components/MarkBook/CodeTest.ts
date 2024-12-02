import { createCssVariablesTheme, getHighlighter } from 'shiki';

// Create a custom CSS variables theme, the following are the default values
const myTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true
});
let token: any[][] = [];
(async function () {
  const highlighter = await getHighlighter({
    langs: ['javascript'],
    themes: [myTheme] // register the theme
  });
  const resalt = highlighter.codeToTokens('const foo = "bar"', {
    lang: 'javascript',
    theme: 'css-variables' // use the theme
  });
  token = resalt.tokens
  console.log(resalt);
})();