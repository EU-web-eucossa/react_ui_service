import axios from "axios"

const PRODUCTS_URL = 'https://eucossa-product-microservice.herokuapp.com'
const USER_URL = 'https://user-microservice-app.herokuapp.com/api/v1/users'
const PAYMENT_URL = 'https://eucossa-payment-service.herokuapp.com/api/eucossa'

export const productsAxios = axios.create({
    baseURL: PRODUCTS_URL
})


export const paymentAxios = axios.create({
    baseURL: PAYMENT_URL
})
export const usersAxios = axios.create({
    baseURL: USER_URL
})
