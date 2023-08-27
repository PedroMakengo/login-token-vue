<script lang="js" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { Auth } from '@/infra/usecases/auth'

import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()
const router = useRouter()
const errorLogin = ref('')

// jordane09@example.net
// 123

const user = reactive({
  email: '',
  password: ''
})

async function login() {
  try {
    // const { data } = await http.post('/auth', user)
    const { data } = await Auth.store(user)
    auth.setToken(data.token)
    auth.setUser(data.user)
    router.push('/dashboard')
  } catch (error) {
    console.log(error)
    errorLogin.value = 'Erro no login'
  }
}
</script>

<template>
  <main class="login">
    <h1>Login</h1>

    <form @submit.prevent="login">
      <input type="text" placeholder="Seu e-mail" v-model="user.email" />
      <input type="password" placeholder="Sua senha" v-model="user.password" />
      <button type="submit">Login</button>
      <p>{{ errorLogin }}</p>
    </form>
  </main>
</template>

<style lang="css" scoped>
.login {
}
form {
  width: 30%;
  display: flex;
  flex-direction: column;
}

form input {
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>
