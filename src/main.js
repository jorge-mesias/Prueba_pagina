import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// require('../src/plugins/fontawesome')


// Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(router).mount('#app')

