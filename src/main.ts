import { createApp } from 'vue'
import App from './App.vue'
import test from './directives/test'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
.use(vuetify)
.directive('test', test)
.mount('#app')


