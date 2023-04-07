import { createApp } from 'vue'
import App from './App.vue'
import test from './directives/test'
import vuetify from './setupVuetify'



createApp(App)
.use(vuetify)
.directive('test', test)
.mount('#app')


