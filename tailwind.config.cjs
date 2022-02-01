const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			xxs: '400px',
			xs: '500px',
			...defaultTheme.screens
		}
	},

	plugins: []
};

module.exports = config;
