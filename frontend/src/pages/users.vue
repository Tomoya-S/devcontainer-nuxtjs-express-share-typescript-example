<template>
  <v-row>
    <v-col class="text-center">
      <div>
        created: {{ user.login_id }}
        <v-data-table
          class="text-left"
          :headers="headers"
          :items="getUsers"
          item-key="id"
          :search="search"
        >
        </v-data-table>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { UsersStore } from '~/store'
import type { User } from '@shared/types/user'

@Component
export default class extends Vue {
  private name: string = 'default'
  private search: string = ''
  private headers: { text: string; value: string }[] = [
    {
      text: 'id',
      value: 'id',
    },
    {
      text: 'login_id',
      value: 'login_id',
    },
    {
      text: 'first_name',
      value: 'first_name',
    },
    {
      text: 'last_name',
      value: 'last_name',
    },
  ]
  private user: User = {
    id: 0,
    login_id: 'typescript_user',
    last_name: '',
    first_name: '',
  }
  get getUsers() {
    return UsersStore.getUsers
  }

  async mounted() {
    await UsersStore.fetchUsers()
  }
}
</script>
