import http from '@/services/http.js'

class UsecaseAddPost {
  static async store(data) {
    const response = await http.post('/api/post', data)
    return response
  }
}
export { UsecaseAddPost }
