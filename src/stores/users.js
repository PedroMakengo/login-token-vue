import { ref } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('users', () => {
  const users = ref([])

  function setUsers(data) {
    users.value = data
  }

  return { users, setUsers }
})
