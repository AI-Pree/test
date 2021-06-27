import i18n from './src/i18n'
import lessToJson from 'less-to-json'
import path from 'path'

const lessVariables = lessToJson('src/styles/variables.less')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  srcDir: './src/',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  head: {
    title: 'DS Consulting',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      }
    ]
  },

  loadingIndicator: {
    name: 'circle',
    color: '#5ac4be',
    background: '#131a35'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '~/assets/styles/main.scss',
    {
      src: '@/styles/antd.less',
      lang: 'less'
    },
    {
      src: '@/styles/global.less',
      lang: 'less'
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios.ts', '@/plugins/api.ts', '@/plugins/web3.ts', '@/plugins/notify.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://typed-vuex.roe.dev
    'nuxt-typed-vuex'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-i18n',
    '@nuxtjs/axios',
    'nuxt-clipboard',
    '@nuxtjs/dayjs',
    '@nuxtjs/google-gtag'
  ],

  i18n,

  styleResources: {
    scss: ['./assets/styles/main.scss']
  },

  clipboard: {
    autoSetContainer: true
  },

  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    plugins: ['utc']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^ant-design-vue/, '@project-serum/sol-wallet-adapter'],

    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: lessVariables
      }
    },

    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'lib',
            style: true
          },
          'ant-design-vue'
        ]
      ]
    },

    extend(config) {
      config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './src/utils/antd-icons.ts')
    }
  }
}
