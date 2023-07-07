import axios from 'axios'

const loginConfig = {
  baseURL: 'http://45.12.239.156:8081/api',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const LoginAPIInstance = axios.create(loginConfig)

const defaultConfig = {
  baseURL: 'http://45.12.239.156:8081/api',
  headers: {
    'Content-Type': 'application/json'
  }
}

const token = localStorage.getItem('token')
if (token) defaultConfig.headers.Authorization = `Bearer ${token}`

export const DefaultAPIInstance = axios.create(defaultConfig)
