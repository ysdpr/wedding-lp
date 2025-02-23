import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      base: "/wp-content/reactpress/apps/wed_p/dist/",
      plugins: [react()],
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern-compiler",
          },
        },
      }
  
    }
  } else {
    return {
      plugins: [react()],
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern-compiler",
          },
        },
      }
  
    }
  }
})
