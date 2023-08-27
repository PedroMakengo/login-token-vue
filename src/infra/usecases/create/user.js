import http from '@/services/http.js'

class UsecasesAddUsers {
  static async store(data) {
    const response = await http.post('/api/users', data)
    return response
  }
}
export { UsecasesAddUsers }
