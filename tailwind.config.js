/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'appdark': '#0F172A',
        'applight': '#eff6ff',

        'primary':'#006FEE',
        'secondary':'#9353d3',
        'success':'#17c964',
        'warning':'#f5a524',
        'danger':'#f31260',
        'content': {
          '50': 'hsl(222, 47%, 96%)',
          '100': 'hsl(222, 47%, 91%)',
          '200': 'hsl(222, 47%, 81%)',
          '300': 'hsl(222, 47%, 71%)',
          '400': 'hsl(222, 47%, 61%)',
          '500': 'hsl(222, 47%, 51%)',
          '600': 'hsl(222, 47%, 41%)',
          '700': 'hsl(222, 47%, 31%)',
          '800': 'hsl(222, 47%, 21%)',
          '900': 'hsl(222, 47%, 11%)',
          '950': 'hsl(222, 47%, 6%)',
        },
      },
      boxShadow:{
        'primary':'0 3px 6px hsla(0,100%,0%,0.5)'
      }
    },
    fontFamily: {
      'sans': ['Dm Sans','Poppins Regular','Poppins','ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['Cascadia Code','ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
}

