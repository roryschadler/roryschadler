import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  projectId: '39ri8w',
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/tests/**/*.spec.{js,jsx,ts,tsx}',
    supportFile: false,
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor());
    },
  },
});
