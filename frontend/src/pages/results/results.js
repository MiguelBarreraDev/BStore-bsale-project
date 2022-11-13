import '@/css/style.css'
import { _xjs } from '@/lib/remi'
import { renderCategoriesNav, renderProducts } from '@/components'
import { $, searchFuncionality } from '@/utils'
import { searchProductsService } from '@/services'

/*----------------------*/
/* Built in
/*----------------------*/
renderCategoriesNav()

/*----------------------*/
/* Custom
/*----------------------*/
const paramsFromUrl = new URLSearchParams(window.location.search)
const searchQuery = paramsFromUrl.get('search_query')

searchFuncionality({ defaultValue: searchQuery })

const getFilteredProducts = async () => {
  const searchProductInput = $('#search-product-input')
  const { value } = searchProductInput
  const { data: filteredProduct } = await searchProductsService(value)

  renderProducts({ data: filteredProduct })
}

getFilteredProducts()
