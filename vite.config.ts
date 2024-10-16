/// <reference types="vitest" />
import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react(), tsconfigPaths()],
  clearScreen: false,
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  assetsInclude: ['src/assets/*.md'],
  build: {
    assetsInlineLimit: (filePath: string) => {
      if (filePath.endsWith('.md')) {
        return false;
      }
      return true;
    },
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: resolve(__dirname, 'tests/setupTests.ts'),
    watch: false,
  },
}));
