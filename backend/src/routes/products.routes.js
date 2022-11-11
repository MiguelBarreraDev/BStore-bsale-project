import productController from '#controllers/products/product.controller.js'
import productsAllController from '#controllers/products/products-all.controller.js'
import { Router } from 'express'

const productsRouter = Router()

productsRouter
  .get('/', productsAllController)
  .get('/:id', productController)

export default productsRouter
