import path from 'path'
import ReactPlugin from  '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'


export default defineConfig({
  plugins: [
    RubyPlugin(),
    ReactPlugin()
 ],
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'app/javascript'),
  },
},
server: {
  hmr: true, 
  watch: {
    usePolling: true, 
  },
},

})





