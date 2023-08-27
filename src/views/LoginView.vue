<script lang="js" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { Auth } from '@/infra/usecases/auth'
import { UsecasesAddUsers } from '@/infra/usecases/create/user.js'

import { useAuthStore } from '@/stores/auth.js'
import { userStore } from '@/stores/users.js'

const auth = useAuthStore()
const users = userStore()

const router = useRouter()
const errorLogin = ref('')
const verifed = ref(true)

// jordane09@example.net
// 123

const user = reactive({
  email: '',
  password: ''
})

const name = ref('')
const job = ref('')

async function login() {
  try {
    const { data } = await Auth.store(user)
    auth.setToken(data.token)
    auth.setUser({ user: 'Pedro Makengo' })
    router.push('/dashboard')
  } catch (error) {
    console.log(error)
    errorLogin.value = 'Erro no login'
  }
}

async function addUser() {
  const data = {
    name: name.value,
    job: job.value
  }
  const response = await UsecasesAddUsers.store(data)
  users.setUsers(data)
  console.log(response)
}

function handleChangeForm() {
  verifed.value = !verifed.value
}
</script>

<template>
  <main class="login">
    <h1>Login</h1>

    <button @click="handleChangeForm">Adicionar Usuário</button>

    <form @submit.prevent="login" v-if="verifed === true">
      <h2>Login</h2>
      <input type="text" placeholder="Seu e-mail" v-model="user.email" />
      <input type="password" placeholder="Sua senha" v-model="user.password" />
      <button type="submit">Login</button>
      <p>{{ errorLogin }}</p>
    </form>
    <template v-else>
      <form @submit.prevent="addUser">
        <h2>Adicionar User</h2>
        <input type="text" placeholder="Adicione seu nome" v-model="name" />
        <input type="text" placeholder="Adicione seu nome" v-model="job" />
        <button type="submit">Criar Usuário</button>
      </form>
    </template>
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
