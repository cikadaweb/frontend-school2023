import { LoginAPIInstance, DefaultAPIInstance } from '@/api/index'

export const AuthApi = {
  login (login, password) {
    const url = '/login'
    const data = { login, password }
    return LoginAPIInstance.post(url, data)
  },
  register (name, login, password) {
    const url = '/registration'
    const data = { name, login, password }
    return DefaultAPIInstance.post(url, data)
  }
  // logout() {
  //   const url = '/logout';
  //   return DefaultAPIInstance.post(url, {});
  // },
}
