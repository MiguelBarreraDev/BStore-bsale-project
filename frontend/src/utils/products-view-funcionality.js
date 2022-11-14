import { renderProducts } from "@/components"
import { $ } from "./global-object"
/**
 * Sets the number of products represented on the page
 * params {Number} number - Number of product to render on the view
 */
const setProductsNumber = (number) => {
  const productNumberField = $('#view-options-number')

  productNumberField.textContent = `${number} Products`
}

/**
 * Sort products asc or desc
 * params {Array} data - List of items to sort
 */
const handleSort = (data) => (e) => {
  const sortType = e.target?.value

  const handleCompare = (a, b) => {
    const band = a?.name.localeCompare(b?.name)

    return sortType === 'asc' ? band : band * -1
  }

  const sortedData = data.sort(handleCompare)

  renderProducts({ data: sortedData })
}

/**
 * Add functionality to format how products displayed
 * params {Array} products - list of products to sort
 */
const productsViewFuncionality = (products) => {
  const sortSelect = $('#view-options-sort')

  setProductsNumber(products.length)

  sortSelect.addEventListener('change', handleSort(products))
}

export default productsViewFuncionality
