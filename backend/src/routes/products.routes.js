import productController from '#controllers/products/product.controller.js'
import productsAllController from '#controllers/products/products-all.controller.js'
import productsSearchController from '#controllers/products/products-search.controller.js'
import { Router } from 'express'

const productsRouter = Router()

productsRouter
  .get('/', productsAllController)
  .get('/search', productsSearchController)
  .get('/:id', productController)

export default productsRouter
