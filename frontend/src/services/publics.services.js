import axios from "axios"

const API_URI = 'http://localhost:3000'
axios.defaults.baseURL = API_URI

export const productsService = () => axios.get('products')
export const categoriesService = () => axios.get('categories')
export const searchProductsService = key => axios.get('products/search', { params: { product: key } })
export const productsByCategoryService = categoryId => axios.get(`categories/${categoryId}/products`)
