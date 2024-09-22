import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/library/index.ts',
      fileName: '[name]',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['solid-js'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src/library',
      },
    },
  },
})
