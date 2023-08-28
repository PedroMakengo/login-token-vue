import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from '@/services/http.js'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token'))
  const user = ref(JSON.parse(localStorage.getItem('user')))

  function setToken(tokenValue) {
    localStorage.setItem('token', tokenValue)
    token.value = tokenValue
  }

  function setUser(userValue) {
    localStorage.setItem('user', JSON.stringify(userValue))
    user.value = userValue
  }

  async function checkToken() {
    try {
      const tokenAuth = 'Bearer ' + token.value
      const data = http.get('auth/verify', {
        headers: {
          Authorization: tokenAuth
        }
      })

      return data
    } catch (error) {
      console.log(error)
    }
  }

  const isAuthenticated = computed(() => {
    return token.value && user.value
  })

  const fullName = computed(() => {
    if (user.value) {
      return user.value?.firstName + ' ' + user.value?.lastName
    }
    return ''
  })

  function clear() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    token.value = ''
    user.value = ''
  }

  return { token, user, setToken, setUser, checkToken, clear, fullName, isAuthenticated }
})
