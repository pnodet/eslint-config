# @pnxdxt/eslint-config

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Next.js

## Install

```
$ npm i --dev @pnxdxt/eslint-config
```

### Example usage with eslintrc.json

```json
{
	"extends": ["@pnxdxt/eslint-config"],
	"settings": {
		"tailwindcss": {
			"config": "tailwind.config.js"
		}
	}
}
```

Auto-fix in vscode: update settings.json

```json
{
	"typescript.tsdk": "./node_modules/typescript/lib",
	"typescript.preferences.importModuleSpecifier": "non-relative",
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnSave": true,
	"editor.codeActionsOnSave": [
		"source.addMissingImports",
		"source.fixAll.eslint"
	]
}
```

Ignore paths: update .eslintignore

```
**/node_modules/*
**/out/*
**/.next/*

pnpm-lock.yaml
next-env.d.ts

*.mjs
*.cjs
```

## License

MIT © [pnxdxt](https://github.com/pnxdxt)
