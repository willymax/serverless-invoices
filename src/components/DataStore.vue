<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { DataStore, Predicates } from '@aws-amplify/datastore'
// import { BankAccount } from '@/models'

export default {
    name: 'DataStore',
    data() {
        return {
            testName: 'Invoice App',
        }
    },
    components: {
        // BankAccount,
    },
    methods: {
        name() {
            console.log('Name')
        },
    },
}
</script>

<style lang="scss" scoped></style>
