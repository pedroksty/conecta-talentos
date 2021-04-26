import axios from 'axios'

const api = axios.create({
  baseURL: 'https://application.conecta-talentos.com.br'
})

export { api }
