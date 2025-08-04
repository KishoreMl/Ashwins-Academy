import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  build: {
    target: 'esnext',
  },
  // Uncomment the line below if deploying to GitHub Pages or subfolder
  // base: '/your-repo-name/',
});