import { $ } from "./global-object"

/**
 * Navigate between different views via a specific path
 * params {String} path - Destination route of the page
 */
const navigate = path => window.location.href = path

/**
 * Redirect to the results page and set the
 * events in the DOM
 */
const searchFuncionality = ({ defaultValue } = {}) => {
  const RESULTS_URL = '/pages/results/results.html'
  const searchProductButton = $('#search-product-button')
  const searchProductInput = $('#search-product-input')

  // Insert default value to the input of search type
  searchProductInput.value = defaultValue ?? ''
  
  // Perfom search when user presses enter
  searchProductInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
      navigate(`${RESULTS_URL}?search_query=${searchProductInput.value}`)
    }
  })

  // Perfom search when user clicked in the search button
  searchProductButton.addEventListener('click', () => {
    navigate(`${RESULTS_URL}?search_query=${searchProductInput.value}`)
  })
}

export default searchFuncionality
