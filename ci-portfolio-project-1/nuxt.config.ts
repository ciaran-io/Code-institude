import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  }
  // Src directory
  srcDir: 'src/',
  // Nuxt modules
  modules: ['@nuxt/image', 'nuxt-icon'],
   // Nuxt build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          'tailwindcss/nesting': {},
          autoprefixer: {},
        },
      },
    },
  },
})
