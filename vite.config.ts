import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import vitePluginRequire from "vite-plugin-require";
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // Define aliases for specific libraries (@uniswap/widgets is importing it with '~' and vite can't resolve it)
      '~@fontsource/ibm-plex-mono': '@fontsource/ibm-plex-mono',
      '~@fontsource/inter': '@fontsource/inter',
      // Add more aliases as needed
    }
 },
  plugins: [
    topLevelAwait(),
    react(),
    svgr(),
    viteTsconfigPaths({
      root: "..",
    }),
    nodePolyfills(),
    vitePluginRequire.default(),
  ],
  define: {
    global: 'globalThis'
  },
  // logLevel: 'silent', // Set log level to 'silent' to disable warnings
  server: {
    // this ensures that the browser opens upon server start
    // open: true,
    // this sets a default port to 3000
    port: 3000,
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});
