import '@/css/style.css'
import { _xjs, renderElement } from '@/lib/remi'
import { renderCategoriesNav, renderProducts } from '@/components'
import { $, searchFuncionality } from '@/utils'
import {searchProductsService} from '@/services'

/*----------------------*/
/* Built in
  /*----------------------*/
renderCategoriesNav()


/*----------------------*/
/* Custom
/*----------------------*/
const paramsFromUrl = new URLSearchParams(window.location.search)
const search_query = paramsFromUrl.get('search_query')

searchFuncionality({ defaultValue: search_query })

const getFilteredProducts = async () => {
  const searchProductInput = $('#search-product-input')
  const { value } = searchProductInput
  const { data: filteredProduct } = await searchProductsService(value)

  renderProducts({ data: filteredProduct })
}

getFilteredProducts()
