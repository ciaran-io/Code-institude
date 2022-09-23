// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  typescript: {
    shim: false,
  },
  css: ['~/assets/css/main.css'],
  // Src directory
  srcDir: 'src/',
  // Nuxt modules
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss'],
  // Nuxt build
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: '~~/tailwind.config.js',
    exposeConfig: false,
    viewer: false,
  },
}
