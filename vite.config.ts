import * as path from 'node:path'
import copy from 'rollup-plugin-copy'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    solidPlugin(),
    copy({
      targets: [
        {
          src: 'src/library/**/*.css',
          dest: 'dist',
          // Keep the directory structure
          rename: (name, extension, fullPath) =>
            path.join(
              path.relative(path.join(__dirname, 'src/library'), path.dirname(fullPath)),
              `${name}.${extension}`,
            ),
        },
      ],
      hook: 'writeBundle',
    }),
  ],
  build: {
    lib: {
      entry: 'src/library/index.ts',
      fileName: '[name]',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['solid-js', 'solid-js/web', /\.css$/],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src/library',
      },
    },
  },
  resolve: {
    alias: {
      '~': '/src',
    },
  },
})
