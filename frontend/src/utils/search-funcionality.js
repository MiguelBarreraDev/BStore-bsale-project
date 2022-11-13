import {renderProducts} from "@/components"
import {searchProductsService} from "@/services"
import { $ } from "./global-object"

export const searchFuncionality = ({ defaultValue } = {}) => {
  const searchProductButton = $('#search-product-button')
  const searchProductInput = $('#search-product-input')

  // Insert default value to the input
  searchProductInput.value = defaultValue ?? ''

  const getFilteredProducts = async () => {
    const searchProductInput = $('#search-product-input')
    const { value } = searchProductInput
    const { data: filteredProduct } = await searchProductsService(value)

    renderProducts({ data: filteredProduct })
  }


  searchProductInput.addEventListener('keyup', e => {
    if (e.keyCode === 13 || e.key === 'Enter') {
      window.location.href = `/pages/results/results.html?search_query=${searchProductInput.value}`
      getFilteredProducts()
      searchProductInput.value = ''
    }
  })

  searchProductButton.addEventListener('click', () => {
    window.location.href = `/pages/results/results.html?search_query=${searchProductInput.value}`
    getFilteredProducts()
    searchProductInput.value = ''
  })
}

export default searchFuncionality
