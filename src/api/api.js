import axios from 'axios'
axios.defaults.withCredentials = true


//const url = 'http://localhost:4000'; PARA ENTORNO DE DESARROLLO
const url = 'https://curcuma.fly.dev';


export async function onRegistration(registrationData) {
  return await axios.post(
    `${url}/register`,
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post(`${url}/login`, loginData)
}