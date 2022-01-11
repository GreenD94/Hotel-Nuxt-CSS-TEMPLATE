import moduelePath from './modulePath'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hotel-csstemplate',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback'
      },
      {
        rel: 'stylesheet',
        href:
          'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'
      }
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'js/jquery.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/jquery-ui.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/fixed-jquey-ui-conflict.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/bootstrap.bundle.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/Chart.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/sparkline.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/jquery.vmap.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/jquery.vmap.usa.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/jquery.knob.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/moment.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/daterangepicker.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/tempusdominus-bootstrap-4.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/summernote-bs4.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/jquery.overlayScrollbars.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'js/adminlte.js',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/all.min.css',
    '@/assets/css/tempusdominus-bootstrap-4.min.css',
    '@/assets/css/icheck-bootstrap.min.css',
    '@/assets/css/jqvmap.min.css',
    '@/assets/css/adminlte.min.css',
    '@/assets/css/OverlayScrollbars.min.css',
    '@/assets/css/daterangepicker.css',
    '@/assets/css/summernote-bs4.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios', '~/plugins/authCan'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', ...moduelePath],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          user: { url: '/api/login', method: 'get' }
        },
        user: {
          property: 'data'
        }
      }
    },
    redirect: {
      home: false
    }
  },

  axios: {
    credentials: true,
    baseURL: 'http://localhost:8000/api'
  },

  router: {
    middleware: ['auth', 'routeCan']
  }
}
