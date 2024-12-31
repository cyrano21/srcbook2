/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    include: ['test/**/*.test.mts'],
    globals: true,
  },
  server: {
    hmr: true,
  },
  resolve: {
    alias: {
      '@srcbook/shared': resolve(__dirname, '../shared/dist/index.mjs'),
    },
  },
  plugins: [
    tsconfigPaths(),
  ],
});
