export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/tailwind.css'],
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
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'es', iso: 'es-ES', file: 'es.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
  },
  compatibilityDate: '2025-03-02'
});