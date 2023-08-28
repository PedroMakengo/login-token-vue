<script lang="js" setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  console.log(auth.user)

  router.push('/login')

  auth.clear()
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
      <li>
        <template v-if="auth.isAuthenticated">
          <p>Olá {{ auth.fullName }}</p>
          <button @click="logout">Terminar Sessão</button>
        </template>
        <template v-else>
          <p>Olá, Visitante</p>
        </template>
      </li>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  height: 8vh;
  background: red;

  display: flex;
  align-items: center;
  justify-content: center;
}

header nav {
  display: flex;
  gap: 1rem;
}

header nav a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
