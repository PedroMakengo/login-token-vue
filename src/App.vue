<script lang="js" setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
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
