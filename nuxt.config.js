import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Sweet Blessing',
    title: 'Sweet Jesus',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'Sweet Jesus', content: 'Sweet Blessing' },
      { name: 'format-detection', content: 'sweet-blessing' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  loading: { color: '#EAAC9D' },

  manifest: {
    name: 'Sweet Jesus',
    short_name: 'Sweet',
    background_color: '#565D47',
    theme_color: '#EAAC9D',
    display: "fullscreen",
    icons: [
      {
        "src": "/logoS-512x512.png",
        "type": "image/png",
        "sizes": "512x512"
      },
      {
        "src": "/logoS-192x192.png",
        "type": "image/png",
        "sizes": "192x192"
      }
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  // env: {
  //   SWEET_API_URL: 'https://sweet-blessing.herokuapp.com',
  //   USER_ID: '631e54b1547de751de13c089'
  // },
  env: {
    SWEET_API_URL: process.env.SWEET_API_URL,
    USER_ID: process.env.USER_ID
  },  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#EAAC9D',
          beige: '#F0DAA4',
          marron: '#B49C73',
          accent: colors.grey.darken3,
          secondary: '#565D47',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
