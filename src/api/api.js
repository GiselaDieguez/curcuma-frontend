import axios from 'axios'
axios.defaults.withCredentials = true


//export const url = 'http://localhost:4000'; 
export const url = 'https://curcuma.fly.dev';


export async function onRegistration(registrationData) {
  return await axios.post(
    `${url}/register`,
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post(`${url}/login`, loginData)
}

export async function createBooking(bookingData){
  return await axios.post(`${url}/booking`, bookingData)
}