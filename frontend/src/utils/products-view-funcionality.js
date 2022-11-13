import { renderProducts } from "@/components"
import { $ } from "./global-object"

const setProductsNumber = (number) => {
  const productNumberField = $('#view-options-number')
  productNumberField.textContent = `${number} Products`
}

const handleSort = (data) => (e) => {
  const sortType = e.target?.value

  const handleCompare = (a, b) => {
    const band = a?.name.localeCompare(b?.name)

    return sortType === 'asc' ? band : band * -1
  }

  const sortedData = data.sort(handleCompare)

  renderProducts({ data: sortedData })
}

const productsViewFuncionality = (products) => {
  const sortSelect = $('#view-options-sort')

  setProductsNumber(products.length)

  sortSelect.addEventListener('change', handleSort(products))
}

export default productsViewFuncionality
