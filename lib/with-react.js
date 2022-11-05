module.exports = {
	$schema: 'http://json.schemastore.org/eslintrc',
	globals: {
		JSX: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true,
		},
		jsx: true,
	},
	settings: {
		react: {
			version: 'detect',
			pragma: 'React',
		},
	},
	ignorePatterns: ['**/node_modules/*'],
	plugins: ['jsx-a11y', 'react-hooks', 'react'],
	extends: ['@pnxdxt/eslint-config/lib/defaults'],
	overrides: [
		{
			files: ['pages/*', 'pages/**/*', 'src/pages/*', 'src/pages/**/*'],
			rules: {
				'import/no-default-export': 'off',
			},
		},
	],
	rules: {
		'@shopify/react-hooks-strict-return': [2],
		'@shopify/react-initialize-state': [2],
		'@shopify/react-no-multiple-render-methods': [2],
		'@shopify/react-prefer-private-members': [2],
		'@shopify/react-require-autocomplete': [2],
		'@shopify/react-type-state': [2],
		'jsx-a11y/accessible-emoji': [2],
		'jsx-a11y/alt-text': [
			2,
			{
				elements: ['img', 'object', 'area', 'input[type="image"]'],
				img: [],
				object: [],
				area: [],
				'input[type="image"]': [],
			},
		],
		'jsx-a11y/anchor-has-content': [
			2,
			{
				components: [],
			},
		],
		'jsx-a11y/anchor-is-valid': [
			2,
			{
				components: ['Link'],
				specialLink: ['to'],
				aspects: ['noHref', 'invalidHref', 'preferButton'],
			},
		],
		'jsx-a11y/aria-activedescendant-has-tabindex': [2],
		'jsx-a11y/aria-props': [2],
		'jsx-a11y/aria-proptypes': [2],
		'jsx-a11y/aria-role': [
			2,
			{
				ignoreNonDOM: false,
			},
		],
		'jsx-a11y/aria-unsupported-elements': [2],
		'jsx-a11y/autocomplete-valid': [
			0,
			{
				inputComponents: [],
			},
		],
		'jsx-a11y/click-events-have-key-events': [2],
		'jsx-a11y/control-has-associated-label': [
			2,
			{
				labelAttributes: ['label'],
				controlComponents: [],
				ignoreElements: [
					'audio',
					'canvas',
					'embed',
					'input',
					'textarea',
					'tr',
					'video',
				],
				ignoreRoles: [
					'grid',
					'listbox',
					'menu',
					'menubar',
					'radiogroup',
					'row',
					'tablist',
					'toolbar',
					'tree',
					'treegrid',
				],
				depth: 5,
			},
		],
		'jsx-a11y/heading-has-content': [
			2,
			{
				components: [''],
			},
		],
		'jsx-a11y/html-has-lang': [2],
		'jsx-a11y/iframe-has-title': [2],
		'jsx-a11y/img-redundant-alt': [2],
		'jsx-a11y/interactive-supports-focus': [2],
		'jsx-a11y/label-has-associated-control': [
			2,
			{
				labelComponents: [],
				labelAttributes: [],
				controlComponents: [],
				assert: 'both',
				depth: 25,
			},
		],
		'jsx-a11y/label-has-for': [
			2,
			{
				components: [],
				required: {
					every: ['nesting', 'id'],
				},
				allowChildren: false,
			},
		],
		'jsx-a11y/lang': [2],
		'jsx-a11y/media-has-caption': [
			2,
			{
				audio: [],
				video: [],
				track: [],
			},
		],
		'jsx-a11y/mouse-events-have-key-events': [2],
		'jsx-a11y/no-access-key': [2],
		'jsx-a11y/no-autofocus': [
			2,
			{
				ignoreNonDOM: true,
			},
		],
		'jsx-a11y/no-distracting-elements': [
			2,
			{
				elements: ['marquee', 'blink'],
			},
		],
		'jsx-a11y/no-interactive-element-to-noninteractive-role': [
			2,
			{
				tr: ['none', 'presentation'],
			},
		],
		'jsx-a11y/no-noninteractive-element-interactions': [
			2,
			{
				handlers: [
					'onClick',
					'onMouseDown',
					'onMouseUp',
					'onKeyPress',
					'onKeyDown',
					'onKeyUp',
				],
			},
		],
		'jsx-a11y/no-noninteractive-element-to-interactive-role': [
			2,
			{
				ul: [
					'listbox',
					'menu',
					'menubar',
					'radiogroup',
					'tablist',
					'tree',
					'treegrid',
				],
				ol: [
					'listbox',
					'menu',
					'menubar',
					'radiogroup',
					'tablist',
					'tree',
					'treegrid',
				],
				li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
				table: ['grid'],
				td: ['gridcell'],
			},
		],
		'jsx-a11y/no-noninteractive-tabindex': [
			2,
			{
				tags: [],
				roles: ['tabpanel'],
			},
		],
		'jsx-a11y/no-onchange': [0],
		'jsx-a11y/no-redundant-roles': [2],
		'jsx-a11y/no-static-element-interactions': [
			0,
			{
				handlers: [
					'onClick',
					'onMouseDown',
					'onMouseUp',
					'onKeyPress',
					'onKeyDown',
					'onKeyUp',
				],
			},
		],
		'jsx-a11y/role-has-required-aria-props': [2],
		'jsx-a11y/role-supports-aria-props': [2],
		'jsx-a11y/scope': [2],
		'jsx-a11y/tabindex-no-positive': [2],
		'jsx-quotes': [2, 'prefer-single'],

		'react-hooks/exhaustive-deps': [1],
		'react-hooks/rules-of-hooks': [2],
		'react/boolean-prop-naming': [
			1,
			{
				validateNested: true,
				rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
			},
		],
		'react/button-has-type': [
			2,
			{
				button: true,
				submit: true,
				reset: false,
			},
		],
		'react/default-props-match-prop-types': [
			2,
			{
				allowRequiredDefaults: false,
			},
		],
		'react/destructuring-assignment': [0, 'always'],
		'react/display-name': [
			2,
			{
				ignoreTranspilerName: false,
			},
		],
		'react/forbid-component-props': [
			0,
			{
				forbid: [],
			},
		],
		'react/forbid-dom-props': [
			0,
			{
				forbid: [],
			},
		],
		'react/forbid-elements': [
			0,
			{
				forbid: [],
			},
		],
		'react/forbid-foreign-prop-types': [
			2,
			{
				allowInPropTypes: true,
			},
		],
		'react/forbid-prop-types': [
			2,
			{
				forbid: ['any', 'array'],
			},
		],
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/hook-use-state': [2],
		'react/iframe-missing-sandbox': [2],
		'react/jsx-boolean-value': [
			2,
			'never',
			{
				always: [],
			},
		],
		'react/jsx-child-element-spacing': [0],
		'react/jsx-closing-bracket-location': [
			0,
			{
				nonEmpty: 'tag-aligned',
				selfClosing: false,
			},
		],
		'react/jsx-closing-tag-location': [0],
		'react/jsx-curly-brace-presence': [
			2,
			{
				props: 'never',
				children: 'ignore',
				propElementValues: 'always',
			},
		],
		'react/jsx-curly-newline': [
			0,
			{
				multiline: 'consistent',
				singleline: 'forbid',
			},
		],
		'react/jsx-curly-spacing': [2, 'never'],
		'react/jsx-equals-spacing': [2, 'never'],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.tsx'],
			},
		],
		'react/jsx-first-prop-new-line': [0, 'multiline'],
		'react/jsx-fragments': [2, 'syntax'],
		'react/jsx-handler-names': [
			2,
			{
				eventHandlerPrefix: 'handle',
				eventHandlerPropPrefix: 'on',
			},
		],
		'react/jsx-indent': [0, 'tab'],
		'react/jsx-indent-props': [0, 'tab'],
		'react/jsx-key': [
			2,
			{
				checkFragmentShorthand: true,
				checkKeyMustBeforeSpread: true,
				warnOnDuplicates: true,
			},
		],
		'react/jsx-max-depth': [0],
		'react/jsx-max-props-per-line': [
			0,
			{
				maximum: 3,
				when: 'multiline',
			},
		],
		'react/jsx-newline': [0],
		'react/jsx-no-bind': [
			2,
			{
				allowArrowFunctions: true,
				allowBind: false,
				allowFunctions: false,
				ignoreRefs: false,
				ignoreDOMComponents: false,
			},
		],
		'react/jsx-no-comment-textnodes': [2],
		'react/jsx-no-constructed-context-values': [2],
		'react/jsx-no-duplicate-props': [
			2,
			{
				ignoreCase: false,
			},
		],
		'react/jsx-no-literals': [
			0,
			{
				noStrings: true,
			},
		],
		'react/jsx-no-script-url': [
			2,
			[
				{
					name: 'Link',
					props: ['to'],
				},
			],
		],
		'react/jsx-no-target-blank': [
			2,
			{
				warnOnSpreadAttributes: true,
				forms: true,
				links: true,
			},
		],
		'react/jsx-no-undef': [2],
		'react/jsx-no-useless-fragment': [2],
		'react/jsx-one-expression-per-line': [
			0,
			{
				allow: 'single-child',
			},
		],
		'react/jsx-pascal-case': [
			2,
			{
				allowAllCaps: true,
				ignore: [],
			},
		],
		'react/jsx-props-no-multi-spaces': [2],
		'react/jsx-props-no-spreading': [
			0,
			{
				html: 'enforce',
				custom: 'enforce',
				explicitSpread: 'ignore',
				exceptions: [],
			},
		],
		'react/jsx-sort-default-props': [
			0,
			{
				ignoreCase: true,
			},
		],
		'react/jsx-sort-prop-types': [0],
		'react/jsx-sort-props': [
			2,
			{
				callbacksLast: true,
				shorthandFirst: true,
				noSortAlphabetically: true,
				reservedFirst: true,
				multiline: 'ignore',
				locale: 'auto',
			},
		],
		'react/jsx-space-before-closing': [0, 'always'],
		'react/jsx-tag-spacing': [
			2,
			{
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
				beforeClosing: 'never',
			},
		],
		'react/jsx-uses-react': [0],
		'react/jsx-uses-vars': [2],
		'react/jsx-wrap-multilines': [
			2,
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'ignore',
				logical: 'ignore',
				prop: 'ignore',
			},
		],
		'react/no-access-state-in-setstate': [2],
		'react/no-adjacent-inline-elements': [0],
		'react/no-array-index-key': [2],
		'react/no-arrow-function-lifecycle': [2],
		'react/no-children-prop': [2],
		'react/no-danger': [2],
		'react/no-danger-with-children': [2],
		'react/no-deprecated': [2],
		'react/no-did-mount-set-state': [0],
		'react/no-did-update-set-state': [2],
		'react/no-direct-mutation-state': [2],
		'react/no-find-dom-node': [2],
		'react/no-invalid-html-attribute': [2],
		'react/no-is-mounted': [2],
		'react/no-multi-comp': [0],
		'react/no-namespace': [2],
		'react/no-redundant-should-component-update': [2],
		'react/no-render-return-value': [2],
		'react/no-set-state': [0],
		'react/no-string-refs': [
			2,
			{
				noTemplateLiterals: true,
			},
		],
		'react/no-this-in-sfc': [2],
		'react/no-typos': [2],
		'react/no-unescaped-entities': [2],
		'react/no-unknown-property': [2],
		'react/no-unsafe': [
			2,
			{
				checkAliases: true,
			},
		],
		'react/no-unstable-nested-components': [2],
		'react/no-unused-class-component-methods': [2],
		'react/no-unused-prop-types': [
			2,
			{
				customValidators: [],
				skipShapeProps: true,
			},
		],
		'react/no-unused-state': [2],
		'react/no-will-update-set-state': [2],
		'react/prefer-es6-class': [2, 'always'],
		'react/prefer-exact-props': [2],
		'react/prefer-read-only-props': [2],
		'react/prefer-stateless-function': [
			2,
			{
				ignorePureComponents: true,
			},
		],
		'react/prop-types': [
			2,
			{
				ignore: [],
				customValidators: [],
				skipUndeclared: false,
			},
		],
		'react/react-in-jsx-scope': [0],
		'react/require-default-props': [
			0,
			{
				forbidDefaultForRequired: true,
				ignoreFunctionalComponents: true,
			},
		],
		'react/require-optimization': [
			0,
			{
				allowDecorators: [],
			},
		],
		'react/require-render-return': [2],
		'react/self-closing-comp': [
			2,
			{
				component: true,
				html: true,
			},
		],
		'react/sort-comp': [
			0,
			{
				order: [
					'static-variables',
					'static-methods',
					'instance-variables',
					'lifecycle',
					'/^handle.+$/',
					'/^on.+$/',
					'getters',
					'setters',
					'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
					'instance-methods',
					'everything-else',
					'rendering',
				],
				groups: {
					lifecycle: [
						'displayName',
						'propTypes',
						'contextTypes',
						'childContextTypes',
						'mixins',
						'statics',
						'defaultProps',
						'constructor',
						'getDefaultProps',
						'getInitialState',
						'state',
						'getChildContext',
						'getDerivedStateFromProps',
						'componentWillMount',
						'UNSAFE_componentWillMount',
						'componentDidMount',
						'componentWillReceiveProps',
						'UNSAFE_componentWillReceiveProps',
						'shouldComponentUpdate',
						'componentWillUpdate',
						'UNSAFE_componentWillUpdate',
						'getSnapshotBeforeUpdate',
						'componentDidUpdate',
						'componentDidCatch',
						'componentWillUnmount',
					],
					rendering: ['/^render.+$/', 'render'],
				},
			},
		],
		'react/sort-prop-types': [
			0,
			{
				ignoreCase: true,
				callbacksLast: false,
				requiredFirst: false,
				sortShapeProp: true,
			},
		],
		'react/state-in-constructor': [2, 'never'],
		'react/static-property-placement': [2, 'property assignment'],
		'react/style-prop-object': [
			2,
			{
				allow: ['FormattedNumber'],
			},
		],
		'react/void-dom-elements-no-children': [2],
	},
};
