import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ,     tailwindcss(),
  ],
  server: {
    port: 3001, // Replace 3001 with the desired port number
  },
})
