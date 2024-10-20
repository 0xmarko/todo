import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: './src/app',
      generatedRouteTree: './src/routes.gen.ts',
      indexToken: 'page',
      routeToken: 'layout',
      autoCodeSplitting: true,
    }),
    tsconfigPaths(),
    react(),
  ],
});
