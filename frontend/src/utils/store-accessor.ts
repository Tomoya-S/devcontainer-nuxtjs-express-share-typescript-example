import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Users from '~/store/users'

let UsersStore: Users
function initialiseStores(store: Store<any>): void {
  UsersStore = getModule(Users, store)
}

export { initialiseStores, UsersStore }