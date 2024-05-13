import cpus from 'cpus';
import react from '@vitejs/plugin-react';
import { parse } from 'envfile';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import vitePluginRequire from 'vite-plugin-require';
import svgr from 'vite-plugin-svgr';
import topLevelAwait from 'vite-plugin-top-level-await';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// for local sdk linking
let addedAlias = {};

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
    react: path.resolve(__dirname, './node_modules/react'),
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
    'react-player': path.resolve(__dirname, './node_modules/react-player'),
    'react-code-blocks': path.resolve(__dirname, './node_modules/react-code-blocks'),
    animejs: path.resolve(__dirname, './node_modules/animejs'),
    raf: path.resolve(__dirname, './node_modules/raf'),
    classnames: path.resolve(__dirname, './node_modules/classnames'),
    protobufjs: path.resolve(__dirname, './node_modules/protobufjs'),
    '@livepeer/react': path.resolve(__dirname, './node_modules/@livepeer/react'),
    '@livekit/components-react': path.resolve(__dirname, './node_modules/@livekit/components-react'),
    'livekit-client': path.resolve(__dirname, './node_modules/livekit-client'),
  };
}

function differMuiSourcemapsPlugins() {
  const muiPackages = ['@mui/material', '@emotion/styled', '@emotion/react'];

  return {
    name: 'differ-mui-sourcemap',
    transform(code: string, id: string) {
      if (muiPackages.some((pkg) => id.includes(pkg))) {
        return {
          code: code,
          map: null,
        };
      }
    },
  };
}
interface SourcemapExclude {
  excludeNodeModules?: boolean;
}
export function sourcemapExclude(opts?: SourcemapExclude) {
  return {
    name: 'sourcemap-exclude',
    transform(code: string, id: string) {
      if (opts?.excludeNodeModules && id.includes('node_modules')) {
        return {
          code,
          // https://github.com/rollup/rollup/blob/master/docs/plugin-development/index.md#source-code-transformations
          map: { mappings: '' },
        };
      }
    },
  };
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // Define aliases for specific libraries (@uniswap/widgets is importing it with '~' and vite can't resolve it)
      '~@fontsource/ibm-plex-mono': '@fontsource/ibm-plex-mono',
      '~@fontsource/inter': '@fontsource/inter',
      // Add more aliases as needed
      ...addedAlias,
      jsbi: path.resolve(__dirname, 'node_modules/jsbi'),
    },
  },
  plugins: [
    topLevelAwait(),
    react(),
    svgr(),
    viteTsconfigPaths({
      root: './',
    }),
    nodePolyfills(),
    vitePluginRequire.default(),
    differMuiSourcemapsPlugins(),
    sourcemapExclude({ excludeNodeModules: true }),
  ],
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
    outDir: 'build',
    sourcemap: false,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      maxParallelFileOps: Math.max(1, cpus().length - 1),
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        sourcemapIgnoreList: (relativeSourcePath) => {
          const normalizedPath = path.normalize(relativeSourcePath);
          return normalizedPath.includes('node_modules');
        },
      },
      cache: false,
    },
  },
});
