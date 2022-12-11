module.exports = {
	$schema: 'http://json.schemastore.org/eslintrc',
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'@pnxdxt/eslint-config/lib/fast',
	],
	rules: {
		'@typescript-eslint/await-thenable': [2],
		'@typescript-eslint/no-floating-promises': [
			2,
			{
				ignoreVoid: true,
				ignoreIIFE: true,
			},
		],
		'@typescript-eslint/no-for-in-array': [0],
		'no-implied-eval': [0],
		'@typescript-eslint/no-implied-eval': [2],
		'@typescript-eslint/no-misused-promises': [
			2,
			{
				checksVoidReturn: {
					arguments: false,
					attributes: false,
				},
			},
		],
		'@typescript-eslint/no-unnecessary-type-assertion': [2],
		'@typescript-eslint/no-unsafe-argument': [2],
		'@typescript-eslint/no-unsafe-assignment': [1],
		'@typescript-eslint/no-unsafe-call': [1],
		'@typescript-eslint/no-unsafe-member-access': [1],
		'@typescript-eslint/no-unsafe-return': [1],
		'require-await': [0],
		'@typescript-eslint/require-await': [2],
		'@typescript-eslint/restrict-plus-operands': [
			2,
			{
				checkCompoundAssignments: true,
				allowAny: false,
			},
		],
		'@typescript-eslint/restrict-template-expressions': [
			1,
			{
				allowNumber: true,
			},
		],
		'@typescript-eslint/unbound-method': [2],
	},
};
