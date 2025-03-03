export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  css: [
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  plugins: [
    '~/plugins/lucide.client.ts',
    '~/plugins/sonner.client.ts'
  ],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  i18n: {
    baseUrl: process.env.NUXT_BASE_URL,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        language: 'en-US',
        name: 'English'
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.json' ,
        language: 'es-ES',
        name: 'Español'
      }
    ],
    defaultLocale: 'en',
    lazy: true,
    strategy: 'prefix_except_default', // Adds /en and /es prefixes, except for default 'en'
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // Redirect only on root (/)
    }
  },
  compatibilityDate: '2025-03-02'
});