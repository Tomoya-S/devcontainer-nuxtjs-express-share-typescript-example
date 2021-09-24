import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/axios-instance'
import type { User } from '@shared/types/user'

@Module({
  name: 'users',
  stateFactory: true,
  namespaced: true,
})
export default class Users extends VuexModule {
  private users: User[] = []
  private undefinedUser: User = {
    id: 0,
    login_id: '',
    last_name: '',
    first_name: '',
  }

  public get getUsers() {
    return this.users
  }

  public get getUser() {
    return (id: Number) => this.users.find((user) => user.id === id)
  }

  public get getUserCount() {
    return this.users.length
  }

  @Mutation
  private add(user: User) {
    this.users.push(user)
  }

  @Mutation
  private remove(id: Number) {
    this.users = this.users.filter((user) => user.id !== id)
  }

  @Mutation set(users: User[]) {
    this.users = users
  }

  @Action({ rawError: true })
  public async fetchUsers() {
    const { data } = await $axios.get<User[]>('/users').catch((e) => {
      return { data: [] }
    })
    this.set(data)
  }

  @Action({ rawError: true })
  public async createUser(payload: User) {
    const { data } = await $axios.post<User>('/users', payload)
    this.add(data)
  }

  @Action({ rawError: true })
  async deleteUser(id: Number) {
    await $axios.delete(`/users/${id}`)
    this.remove(id)
  }
}
