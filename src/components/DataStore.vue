<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import { BankAccount } from '@/models'

export default {
    data() {
        return {
            key: 0,
        }
    },
    components: {
        BankAccount,
    },
}
</script>

<style lang="scss" scoped></style>
