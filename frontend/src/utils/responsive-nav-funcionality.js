import { $ } from "./global-object"

/**
 * Add responsive design to the category navigation bar
 */
const responsiveNavFuncionality = () => {
  const burgerButton = $('#burger-button')
  const categoriesNav = $(`#${burgerButton.dataset['toggle']}`)

  if (window.matchMedia('(min-width: 768px)').matches) {
    categoriesNav.dataset.open = ''
    burgerButton.dataset.mode = 'close'
  }

  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
    if (e.matches){
      categoriesNav.dataset.open = true
      burgerButton.dataset.mode = 'close'
      $('body').classList.remove('overflow-hidden')
    } else {
      categoriesNav.dataset.open = 'initial'
    } 
  })

  burgerButton.addEventListener('click', () => {
    if (burgerButton.dataset.mode === 'close') {
      $('body').classList.add('overflow-hidden')
      burgerButton.dataset.mode = 'open'
      categoriesNav.dataset.open = true
    }
    else {
      $('body').classList.remove('overflow-hidden')
      burgerButton.dataset.mode = 'close'
      categoriesNav.dataset.open = false
    }
  })
}

export default responsiveNavFuncionality
