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
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: resolve(__dirname, 'tests/setupTests.ts'),
    watch: false,
  },
}));
