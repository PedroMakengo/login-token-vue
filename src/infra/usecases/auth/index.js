import http from '@/services/http.js'

class Auth {
  static async store(data) {
    const response = await http.post('/api/login', data)
    return response
  }
}

export { Auth }
