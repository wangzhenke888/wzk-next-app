import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules, // 添加这一行
      // 未使用变量设为警告
      '@typescript-eslint/no-unused-vars': 'warn',
      // any类型设为警告
      '@typescript-eslint/no-explicit-any': 'warn',
      // 其他可能需要调整的规则
      'prefer-const': 'warn',
      'no-console': 'warn',
    },
    languageOptions: {
      // 定义全局变量。JSX时使用也可以build项目
      globals: {
        console: 'readonly',
        FileReader: 'readonly',
        // 其他浏览器全局变量
      }
    }
  }


];

export default eslintConfig;
