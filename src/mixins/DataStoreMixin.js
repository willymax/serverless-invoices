import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import { BankAccount } from '@/models'
import { Auth } from 'aws-amplify'

export const dataStoreMixin = {
    data() {
        return {
            loading: false,
        }
    },
    created() {
        let user = {}
        // console.log('Hello from the mixin!')
        ;(async () => {
            user = this.getUser()
            this.$log.info(`User 2 is: ${user}`)
        })()
        this.$log.info(`User is: ${user}`)
    },
    methods: {
        async getUser() {
            let user = await Auth.currentAuthenticatedUser()
            const { attributes } = user
            return attributes.email
        },
        storeData(form) {
            const { data } = form
            if (!data) {
                return
            }
            DataStore.save(
                new BankAccount({
                    user: this.user.username,
                    data,
                    createdAt: new Date().toISOString(),
                })
            )
                .then(() => {
                    console.log('data created!')
                    this.form = { data: '' }
                })
                .catch(e => {})
        },
    },
}
