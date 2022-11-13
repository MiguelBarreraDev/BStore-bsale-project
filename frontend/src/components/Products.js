import { renderElement, _xjs } from "@/lib/remi"
import { productsByCategoryService, productsService } from "@/services"
import { $ } from "@/utils"
import ProductCard from "./ProductCard"

const Products = async ({ data, categoryId } = {}) => {
  let productsList, dataFromApi

  if (data)
    productsList = data
  else if (categoryId)
    dataFromApi = await productsByCategoryService(categoryId)
  else
    dataFromApi = await productsService()

  productsList ??= dataFromApi?.data

  return _xjs('fragment', {
    children: productsList.map(product => ProductCard(product))
  })
}

const renderProducts = (data) => {
  renderElement($('#products-section'),
    () => Products(data),
    'async'
  )
}

export default renderProducts
