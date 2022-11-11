import categoriesAllController from '#controllers/categories/categories-all.controller.js'
import categoryController from '#controllers/categories/category.controller.js'
import productsByCategoryController from '#controllers/categories/products-by-category.controller.js'
import { Router } from 'express'

const categoriesRouter = Router()

categoriesRouter
  .get('/', categoriesAllController)
  .get('/:id/products', productsByCategoryController)
  .get('/:id', categoryController)

export default categoriesRouter
