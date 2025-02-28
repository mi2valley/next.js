export const PHASE_EXPORT = 'phase-export'
export const PHASE_PRODUCTION_BUILD = 'phase-production-build'
export const PHASE_PRODUCTION_SERVER = 'phase-production-server'
export const PHASE_DEVELOPMENT_SERVER = 'phase-development-server'
export const PHASE_TEST = 'phase-test'
export const PAGES_MANIFEST = 'pages-manifest.json'
export const APP_PATHS_MANIFEST = 'app-paths-manifest.json'
export const BUILD_MANIFEST = 'build-manifest.json'
export const EXPORT_MARKER = 'export-marker.json'
export const EXPORT_DETAIL = 'export-detail.json'
export const PRERENDER_MANIFEST = 'prerender-manifest.json'
export const ROUTES_MANIFEST = 'routes-manifest.json'
export const IMAGES_MANIFEST = 'images-manifest.json'
export const SERVER_FILES_MANIFEST = 'required-server-files.json'
export const DEV_CLIENT_PAGES_MANIFEST = '_devPagesManifest.json'
export const MIDDLEWARE_MANIFEST = 'middleware-manifest.json'
export const DEV_MIDDLEWARE_MANIFEST = '_devMiddlewareManifest.json'
export const REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json'
export const FONT_MANIFEST = 'font-manifest.json'
export const SERVER_DIRECTORY = 'server'
export const SERVERLESS_DIRECTORY = 'serverless'
export const CONFIG_FILES = ['next.config.js', 'next.config.mjs']
export const BUILD_ID_FILE = 'BUILD_ID'
export const BLOCKED_PAGES = ['/_document', '/_app', '/_error']
export const CLIENT_PUBLIC_FILES_PATH = 'public'
export const CLIENT_STATIC_FILES_PATH = 'static'
export const CLIENT_STATIC_FILES_RUNTIME = 'runtime'
export const STRING_LITERAL_DROP_BUNDLE = '__NEXT_DROP_CLIENT_FILE__'
export const MODERN_BROWSERSLIST_TARGET = [
  'chrome 61',
  'edge 16',
  'firefox 60',
  'opera 48',
  'safari 11',
]
export const NEXT_BUILTIN_DOCUMENT = '__NEXT_BUILTIN_DOCUMENT__'
export const NEXT_CLIENT_SSR_ENTRY_SUFFIX = '.__sc_client__'

// server/flight-manifest.js
export const FLIGHT_MANIFEST = 'flight-manifest'
// server/middleware-build-manifest.js
export const MIDDLEWARE_BUILD_MANIFEST = 'middleware-build-manifest'
// server/middleware-react-loadable-manifest.js
export const MIDDLEWARE_REACT_LOADABLE_MANIFEST =
  'middleware-react-loadable-manifest'

// static/runtime/main.js
export const CLIENT_STATIC_FILES_RUNTIME_MAIN = `main`
export const CLIENT_STATIC_FILES_RUNTIME_MAIN_ROOT = `${CLIENT_STATIC_FILES_RUNTIME_MAIN}-app`
// static/runtime/react-refresh.js
export const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = `react-refresh`
// static/runtime/amp.js
export const CLIENT_STATIC_FILES_RUNTIME_AMP = `amp`
// static/runtime/webpack.js
export const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `webpack`
// static/runtime/polyfills.js
export const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(`polyfills`)
export const EDGE_RUNTIME_WEBPACK = 'edge-runtime-webpack'
export const TEMPORARY_REDIRECT_STATUS = 307
export const PERMANENT_REDIRECT_STATUS = 308
export const STATIC_PROPS_ID = '__N_SSG'
export const SERVER_PROPS_ID = '__N_SSP'
export const FLIGHT_PROPS_ID = '__N_RSC'
export const GOOGLE_FONT_PROVIDER = 'https://fonts.googleapis.com/'
export const OPTIMIZED_FONT_PROVIDERS = [
  { url: GOOGLE_FONT_PROVIDER, preconnect: 'https://fonts.gstatic.com' },
  { url: 'https://use.typekit.net', preconnect: 'https://use.typekit.net' },
]
export const STATIC_STATUS_PAGES = ['/500']
export const TRACE_OUTPUT_VERSION = 1

// comparing
// https://nextjs.org/docs/api-reference/edge-runtime
// with
// https://nodejs.org/docs/latest/api/globals.html
export const EDGE_UNSUPPORTED_NODE_APIS = [
  'clearImmediate',
  'setImmediate',
  'BroadcastChannel',
  'Buffer',
  'ByteLengthQueuingStrategy',
  'CompressionStream',
  'CountQueuingStrategy',
  'DecompressionStream',
  'DomException',
  'MessageChannel',
  'MessageEvent',
  'MessagePort',
  'ReadableByteStreamController',
  'ReadableStreamBYOBRequest',
  'ReadableStreamDefaultController',
  'TextDecoderStream',
  'TextEncoderStream',
  'TransformStreamDefaultController',
  'WritableStreamDefaultController',
]
