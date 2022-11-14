import axios from "axios"

const API_URI = 'http://localhost:3000'
axios.defaults.baseURL = API_URI

/**
 * Retrieve all products
 */
export const productsService = () => axios.get('products')

/**
 * Retrieve all categories
 */
export const categoriesService = () => axios.get('categories')

/**
 * Retrieve products matching search condition
 */
export const searchProductsService = key => axios.get('products/search', { params: { product: key } })

/**
 * Retrieve products associated to a category
 */
export const productsByCategoryService = categoryId => axios.get(`categories/${categoryId}/products`)
