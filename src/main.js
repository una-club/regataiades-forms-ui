import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import { createRouter } from './router/router.js'

import en from './assets/lang/en.json'
import fr from './assets/lang/fr.json'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'lato-font/css/lato-font.min.css'
import 'font-awesome/css/font-awesome.css'


Vue.use(BootstrapVue);
Vue.use(VueI18n)

const messages = {
  en: en,
  fr: fr
}

const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages, // set locale messages
})

// export a factory function for creating fresh app, router and store
// instances
export function createApp(lang) {
    console.log("App is creating " + Date.now())
    // create router instance
    const router = createRouter(i18n);

    const app = new Vue({
        router,
        i18n,
        // the root instance simply renders the App component.
        render: h => h(App)
    });

    return { app, router };
}
