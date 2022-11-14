import '@/css/style.css'
import { _xjs } from '@/lib/remi'
import { renderCategoriesNav, renderProducts } from '@/components'
import { $, searchFuncionality } from '@/utils'
import {searchProductsService} from '@/services'

/*-----------------------------------*/
/* Shared functionality between views
/*-----------------------------------*/
renderCategoriesNav()

/*---------------------------------------*/
/* Main functionality of the current view
/*---------------------------------------*/
const paramsFromUrl = new URLSearchParams(window.location.search)
const searchQuery = paramsFromUrl.get('search_query')

searchFuncionality({ defaultValue: searchQuery })

/**
 * Get products that match the search condition
 */
const searchProducts = async () => {
  const searchProductInput = $('#search-product-input')
  const searchData = await searchProductsService(searchProductInput?.value)

  return searchData?.data
}

/**
 * Main function of the Results page
 */
const resultsPage = async () => {
  renderProducts({ data: await searchProducts() })
}

resultsPage()
