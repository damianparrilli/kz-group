/** @type {import('tailwindcss').Config} */
export default {
	content: {
	  files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/dist/*.js'],
	  relative: true,
	  transform: (content) => content.replace(/taos:/g, ''),
	},
	theme: {
		extend: {
		  colors: {
			oscuro: '#262626',
			claro: '#F8F8F8',
			acento: '#EB9719',
			banner: '#383838',
			hoverClaro: '#dfdfdf',
			plants: '#EFEFEF',
		  },
		},
	  },
	plugins: [
	  require('preline/plugin'),
	  require('taos/plugin'),
	],
	safelist: [
	  '!duration-[0ms]',
	  '!delay-[0ms]',
	  'html.js :where([class*="taos:"]:not(.taos-init))',
	],
  }
  