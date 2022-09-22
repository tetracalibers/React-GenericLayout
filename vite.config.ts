import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: '@polym/generic-layout',
      fileName: (format) => `polym-GenericLayout.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
})
