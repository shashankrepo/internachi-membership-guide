// Colors
const baseColors = require('./colors.json');
const colorKeywords = {
	'grey': baseColors['grey-500'],
	'gray': baseColors['gray-500'],
	'blue': baseColors['blue-500'],
	'red': baseColors['red-500'],
	'green': baseColors['green-500'],
	'cyan': baseColors['cyan-500'],
	'yellow': baseColors['yellow-500'],
	'purple': baseColors['purple-500'],
};

module.exports = {
	mode: 'jit',
	prefix: '',
	important: '#guide',
	separator: ':',
	purge: [
		'./*.html'
	],
	theme: {
		screens: {
			'sm': '576px',
			'md': '768px',
			'lg': '992px',
			'xl': '1200px',
			'print': { 'raw': 'print' },
		},
		colors: {
			current: 'currentColor',
			...baseColors,
			...colorKeywords,
		},
		borderColor: theme => ({
			...theme('colors'),
			DEFAULT: theme('colors.gray-300', 'currentColor'),
		}),
		fontFamily: {
			mono: [
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace',
			],
			sans: [
				'proxima-nova',
				'Arial',
				'serif',
			],
			'sans-condensed': [
				'proxima-nova-condensed',
				'Arial',
				'serif',
			],
			serif: [
				'exchange',
				'Georgia',
				'serif',
			],
		},
		fontSize: {
			'2xs': '.75rem',    // 12px
			'xs': '.875rem',    // 14px
			'sm': '1rem',       // 16px
			'base': '1.125rem', // 18px
			'lg': '1.25rem',    // 20px
			'xl': '1.5rem',     // 24px
			'2xl': '1.875rem',  // 30px
			'3xl': '2.25rem',   // 36px
			'4xl': '3rem',      // 48px
			'5xl': '4rem',      // 60px
		},
		fontWeight: {
			'light': 300,
			'normal': 400,
			'semibold': 600,
			'bold': 700,
		},
		maxWidth: (theme, { breakpoints }) => ({
			none: 'none',
			0: '0rem',
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			'7xl': '80rem',
			'1/2': '50%',
			'1/3': '33.33333%',
			'2/3': '66.66667%',
			'1/4': '25%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.66667%',
			'5/6': '83.33333%',
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			prose: '65ch',
			...breakpoints(theme('screens')),
		}),
		minHeight: theme => ({
			auto: 'auto',
			...theme('spacing'),
			'1/3': '33.33333%',
			'2/3': '66.66667%',
			full: '100%',
			screen: '100vh',
		}),
		minWidth: {
			'0': '0',
			'1/2': '50%',
			'1/3': '33.33333%',
			'2/3': '66.66667%',
			'1/4': '25%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.66667%',
			'5/6': '83.33333%',
			'full': '100%',
			min: 'min-content',
			max: 'max-content',
		},
	},
	variants: {
		borderColor: ['responsive', 'dark', 'input-checked', 'group-hover', 'focus-within', 'hover', 'focus'],
		boxShadow: ['responsive', 'input-checked', 'group-hover', 'focus-within', 'hover', 'focus'],
		cursor: ['responsive', 'input-checked', 'group-hover'],
		display: ['responsive', 'logged-out', 'logged-in', 'input-checked'],
		textColor: ['responsive', 'dark', 'input-checked', 'group-hover', 'focus-within', 'hover', 'focus'],
	},
};
