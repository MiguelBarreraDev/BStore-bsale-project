import '@/css/style.css'
import { _xjs, renderElement } from '@/lib/remi'
import { renderCategoriesNav, renderProducts } from '@/components'
import { $, jsonLs, productsViewtFuncionality, searchFuncionality } from '@/utils'
import { productsByCategoryService } from '@/services'

/*----------------------*/
/* Built in
  /*----------------------*/
renderCategoriesNav()

searchFuncionality()

/*----------------------*/
/* Custom
/*----------------------*/
const getCategoryName = (id) => {
  const cachedData = jsonLs.read('categories')
  return cachedData.find(category => category.id == id).name
} 

const getProducts = async (id) => {
  const { data } = await productsByCategoryService(id)
  return data
}

const categoryPage = async () => {
  const paramsFromUrl = new URLSearchParams(window.location.search)
  const categoryId = paramsFromUrl?.get('id')

  if (!categoryId) {
    return renderElement($('#category-name'), () => 'Categoría No Registrada')
  }

  const products = await getProducts(categoryId)

  renderElement($('#category-name'), () => getCategoryName(categoryId))
 
  productsViewtFuncionality(products)

  renderProducts({ data: products })
}

categoryPage()
