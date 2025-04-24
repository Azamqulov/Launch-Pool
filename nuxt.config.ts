// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: { preference: 'dark' },
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/image'],
})
