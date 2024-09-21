import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  server: {
    // from https://ryanjc.com/blog/solidstart-cloudflare-pages/
    preset: 'cloudflare-pages',
    rollupConfig: {
      external: ['__STATIC_CONTENT_MANIFEST', 'node:async_hooks'],
    },
  },
})
