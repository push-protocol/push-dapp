import react from "@vitejs/plugin-react";
import { parse } from 'envfile';
import fs from 'fs';
import path from 'path';
import { defineConfig } from "vite";
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import vitePluginRequire from "vite-plugin-require";
import svgr from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

// for local sdk linking
let addedAlias = {}

// to read and modify webpack config based on local sdk linking or production
let localSDKLinking = false;
const envpath = `./.localsdk.env`;

if (fs.existsSync(envpath)) {
  const envData = fs.readFileSync(envpath, 'utf8');
  const envObject = parse(envData);

  if (envObject['ENFORCE_WEBPACK_LOCAL'] === 'TRUE') {
    localSDKLinking = true;
  }
}

if (localSDKLinking) {
  addedAlias = {
    // Use absolute paths for aliases
    'react': path.resolve(__dirname, './node_modules/react'),
    'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    'react/jsx-runtime': path.resolve(__dirname, './node_modules/react/jsx-runtime'),
    'react-icons': path.resolve(__dirname, './node_modules/react-icons'),
    'react-easy-crop': path.resolve(__dirname, './node_modules/react-easy-crop'),
    'react-image-file-resizer': path.resolve(__dirname, './node_modules/react-image-file-resizer'),
    'react-toastify': path.resolve(__dirname, './node_modules/react-toastify'),
    'react-twitter-embed': path.resolve(__dirname, './node_modules/react-twitter-embed'),
    'emoji-picker-react': path.resolve(__dirname, './node_modules/emoji-picker-react'),
    'gif-picker-react': path.resolve(__dirname, './node_modules/gif-picker-react'),
    '@unstoppabledomains/resolution': path.resolve(__dirname, './node_modules/@unstoppabledomains/resolution'),
    '@livepeer/react': path.resolve(__dirname, './node_modules/@livepeer/react'),
    '@livekit/components-react': path.resolve(__dirname, './node_modules/@livekit/components-react'),
    'livekit-client': path.resolve(__dirname, './node_modules/livekit-client'),
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteTsconfigPaths({
      root: "..",
    }),
    nodePolyfills(),
    vitePluginRequire.default(),
  ],
  resolve: {
    alias: {
      ...addedAlias
    }
  },
  define: {
    global: 'globalThis',
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
