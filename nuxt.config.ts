// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  app: {
    head: {
      title: 'Golden Home Điện Biên - Tư Vấn Thiết Kế Xây Dựng',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Golden Home Điện Biên - Công ty tư vấn thiết kế xây dựng uy tín tại Điện Biên' },
        { name: 'keywords', content: 'xây dựng, thiết kế, tư vấn xây dựng, Điện Biên, Golden Home' },
        { property: 'og:title', content: 'Golden Home Điện Biên - Tư Vấn Thiết Kế Xây Dựng' },
        { property: 'og:description', content: 'Công ty tư vấn thiết kế xây dựng uy tín tại Điện Biên' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ],
    },
  },

  css: [
    '~/assets/css/main.css',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
  },

  image: {
    quality: 80,
    format: ['webp'],
  },

  typescript: {
    strict: true,
    typeCheck: false, // Set to true if you want type checking (requires vue-tsc)
  },

  compatibilityDate: '2024-03-17',
})
