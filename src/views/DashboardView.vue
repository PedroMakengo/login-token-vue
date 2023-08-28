<script setup>
import { userStore } from '@/stores/users.js'

const users = userStore()
</script>

<template>
  <main>
    <h1>Dashboard</h1>

    {{ users.users }}
  </main>
</template>
