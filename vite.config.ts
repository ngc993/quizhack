import { defineConfig } from 'vite';

export default defineConfig({
  base: '/quizhack/',
  test: {
    environment: 'jsdom',
    globals: true
  }
});
