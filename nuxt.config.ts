// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
    "@nuxtjs/strapi",
    "@nuxt/content",
    ["@formkit/nuxt", { autoImport: true }],
    "nuxt-security",
    "@nuxtjs/tailwindcss",
    "@nuxt/image"
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@fortawesome/fontawesome-free/css/all.css", "bulma/css/bulma.css"],

  runtimeConfig: {
    public: {
      apiToken: process.env.API_TOKEN,
    },
  },
  plugins: ["./plugins/google-analytics.js"],

  security: {
    headers: {
      contentSecurityPolicy: {
        "default-src":
          "'self' data: *.synflows.net *.waxtrapp.net www.googletagmanager.com *.google-analytics.com 'unsafe-inline'",
        "script-src":
          "'self' data: *.synflows.net *.waxtrapp.net www.googletagmanager.com *.google-analytics.com 'unsafe-inline'",
        "img-src":
          "'self' data:c *.synflows.net *.waxtrapp.net www.googletagmanager.com *.google-analytics.com 'unsafe-inline'",
      },
      crossOriginEmbedderPolicy: "unsafe-none",
    },
    requestSizeLimiter: false,
    rateLimiter: false,
    xssValidator: false,
    corsHandler: false,
    allowedMethodsRestricter: false,
    hidePoweredBy: false,
    basicAuth: false,
    enabled: true,
    csrf: false,
    nonce: false,
    removeLoggers: false,
    ssg: false,
    sri: false,
  },
});