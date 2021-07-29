import User from '@/store/models/user'

export default {
    namespaced: true,
    state: {
        isModalOpen: false,
    },
    mutations: {
        isModalOpen(state, isOpen) {
            state.isModalOpen = isOpen
        },
    },
    actions: {
        async UserProps({ getters }, props) {
            return getters.User.$update(props)
        },
        async createUser({ getters, dispatch }, props) {
            console.log(props)
            if (props) {
                User.create({
                    data: props,
                })
            }
        },
        async updateUser({ getters, dispatch }, props) {
            if (props) {
                await dispatch('UserProps', props)
            }
            return getters.User
        },
    },
    getters: {
        User() {
            return User.query()
                .with(['fields'])
                .first()
        },
    },
}
