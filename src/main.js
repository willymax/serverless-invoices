import 'es6-promise'
import '@/config/storage.config'
import { BVModalPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/store'
import VueNotifications from 'vue-notification'
import './registerServiceWorker'
import '@aws-amplify/ui-vue'
import VueLogger from 'vuejs-logger'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './aws-exports'
import i18n from './config/i18n.config'

Amplify.configure(awsconfig)

Vue.use(BVModalPlugin)
Vue.use(VueNotifications)

Vue.config.productionTip = false

const isProduction = process.env.NODE_ENV === 'production'

const options = {
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true,
}

Vue.use(VueLogger, options)

const app = new Vue({
    router,
    store,
    i18n,
    created() {
        this.$log.debug('test', this.a, 123)
        this.$log.info('test', this.b)
        this.$log.warn('test')
        this.$log.error('test')
        this.$log.fatal('test')
    },
    render: h => h(App),
}).$mount('#app')

export default app
