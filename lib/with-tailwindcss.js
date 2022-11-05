module.exports = {
	$schema: 'http://json.schemastore.org/eslintrc',
	plugins: ['tailwindcss'],
	extends: [
		'@pnxdxt/eslint-config/lib/with-next',
		'plugin:tailwindcss/recommended',
	],
	rules: {
		'tailwindcss/classnames-order': [1],
		'tailwindcss/enforces-negative-arbitrary-values': [1],
		'tailwindcss/enforces-shorthand': [1],
		'tailwindcss/migration-from-tailwind-2': [1],
		'tailwindcss/no-arbitrary-value': [0],
		'tailwindcss/no-contradicting-classname': [2],
		'tailwindcss/no-custom-classname': [1],
	},
};
