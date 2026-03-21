import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'warn', // Kullanılmayan değişkenler hata (kırmızı) değil, uyarı (sarı) olsun.
      'react/prop-types': 'off', // Resium bileşenlerinde prop-types hatasını kapatır.
      'no-undef': 'off', // 'Cesium' veya 'Cartesian3' gibi global tanımları hata olarak görmez.
      'react/no-unknown-property': 'off', // Cesium'a özel bazı HTML-like property hatalarını engeller.
    },
  },
]);
