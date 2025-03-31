import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitePluginSingleSpa from 'vite-plugin-single-spa';
import externalize from 'vite-plugin-externalize-dependencies';

const port = 8081;
const externalDependencies = ['single-spa', '@hr-forte/legacy', /^@hr-forte\//];

// https://vite.dev/config/
export default defineConfig({
  base: `http://localhost:${port}`,
  optimizeDeps: {
    // HACK: Prevent cache busting and mess up the import map, not sure if it works
    exclude: ['@hr-forte/legacy'],
  },

  plugins: [
    react(),
    vitePluginSingleSpa({
      type: 'mife',
      projectId: 'hr-forte-webapp',
      serverPort: port,
      spaEntryPoints: 'src/hr-forte-webapp.tsx',
    }),
    externalize({
      externals: externalDependencies,
    }),
  ],
  server: {
    cors: true,
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: 'src/hr-forte-webapp.tsx',
      output: {
        // format: 'systemjs',
        entryFileNames: 'hr-forte-webapp.js',
      },
      external: externalDependencies,
    },
  },
});
