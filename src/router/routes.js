import { useAuthStore } from '@/stores/auth.js'

export default async function routes(to, from, next) {
  if (to.meta?.auth) {
    const auth = useAuthStore()

    if (auth.token && auth.user) {
      // const isAuthorization = await auth.checkToken()
      // if (isAuthorization) {
      //   console.log(to.name)
      //   next()
      // }
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
}
