import axios from "axios"

const BASE_URL = 'https://eucossa-product-microservice.herokuapp.com'

export const publicAxios = axios.create({
    baseURL: BASE_URL
})