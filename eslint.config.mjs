

// import js from "@eslint/js";
// import globals from "globals";
// import tseslint from "typescript-eslint";
// import json from "@eslint/json";
// import markdown from "@eslint/markdown";
// import css from "@eslint/css";
// import { defineConfig } from "eslint/config";
import importPlugin from 'eslint-plugin-import'
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended",
//       importPlugin.flatConfigs.recommended,
//       // importPlugin.flatConfigs.typescript
//     ],
//   },
//   { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },
//   tseslint.configs.recommended,
//   { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"], rules: {
//     'json/no-empty-keys': 'off'
//     } },
//   { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc", extends: ["json/recommended"] },
//   { files: ["**/*.md"], plugins: { markdown }, language: "markdown/commonmark", extends: ["markdown/recommended"] },
//   { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
// ]);



export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // importPlugin.flatConfigs.recommended,
  {
    // Apply import plugin settings specifically to TypeScript files
    files: ['**/*.{ts,tsx,mts,mjs,cts}'],
    plugins: {
      import: importPlugin, // Register the import plugin
    },
    settings: {
      'import/resolver': {
        typescript: {
          // This option tells the resolver to always try to resolve types under `<root>@types`
          // even if the module doesn't contain any source code.
          alwaysTryTypes: true,
          // You can optionally specify the path to your tsconfig.json if it's not in the root
          // project: './tsconfig.json',
          // Or if you have multiple tsconfigs:
          // project: ['./tsconfig.json', './tsconfig.node.json'],
        },
        // If you're also importing non-TypeScript files (e.g., .js, .jsx)
        // you might want to include the 'node' resolver as well.
        // node: {
        //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
        // },
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.mjs', '.cts'],
      },
    },
    rules: {
      // Re-enable import/no-unresolved for TypeScript files
      // as tseslint.configs.recommended might disable it
      'import/no-unresolved': 'error',
      // Other import rules you might want
      // 'import/named': 'error',
      // 'import/namespace': 'error',
      // 'import/default': 'error',
      // 'import/export': 'error',
    },
  }
);