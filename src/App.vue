<template>
    <div id="app" class="min-vh-100" :class="$route.name">
        <amplify-authenticator>
            <div>
                <transition name="fade" mode="out-in">
                    <router-view />
                </transition>
                <notifications position="bottom center" classes="snackbar" width="332" />
                <amplify-sign-out></amplify-sign-out>
            </div>
        </amplify-authenticator>
    </div>
</template>

<script>
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import NotificationService from '@/services/notification.service'

export default {
    name: 'app',
    created() {
        this.pauseAnimationsUntilLoaded()
        // authentication state management
        onAuthUIStateChange((state, user) => {
            console.log('onAuthUIStateChange called')
            // set current user and load data after login
            switch (state) {
                case AuthState.SignedIn: {
                    this.user = user
                    const { username } = user
                    this.$log.info(username)
                    let props = { id: username }
                    this.$store
                        .dispatch('users/createUser', props)
                        .then(() => {
                            NotificationService.success(this.$t('notification_updated'))
                        })
                        .catch(err => this.errors.set(err.errors))
                    this.loadMessages()
                    break
                }
            }
        })
    },
    data() {
        return {}
    },
    mounted() {
        this.initColorScheme()
    },
    methods: {
        jsLoaded() {
            document.body.classList.remove('js-loading')
        },
        pauseAnimationsUntilLoaded() {
            document.body.classList.add('js-loading')
            window.addEventListener('load', this.jsLoaded, false)
        },
        initColorScheme() {
            // local storage is used to override OS theme settings
            if (localStorage.getItem('theme')) {
                if (localStorage.getItem('theme') === 'dark') {
                    this.$store.commit('themes/theme', 'dark')
                    return document.documentElement.setAttribute('data-theme', 'dark')
                }
            } else if (!window.matchMedia) {
                // matchMedia method not supported
                return false
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                // OS theme setting detected as dark
                this.$store.commit('themes/theme', 'dark')
                return document.documentElement.setAttribute('data-theme', 'dark')
            }
            document.documentElement.setAttribute('data-theme', this.theme || 'light')
        },
    },
}
</script>

<style lang="scss">
@import './assets/scss/variables';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css';
@import './assets/scss/app';
</style>
