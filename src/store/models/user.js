import { Model } from '@vuex-orm/core'
import { uuidv4 } from '@/utils/helpers'

export default class User extends Model {
    // This is the name used as module name of the Vuex Store.
    static entity = 'users'

    static fields() {
        return {
            id: this.attr(() => uuidv4()),
            email: this.attr(''),
            email_verified: false,
            phone_number: this.attr(''),
            phone_number_verified: false,
            updated_at: this.attr(''),
            created_at: this.attr(''),
        }
    }
}
