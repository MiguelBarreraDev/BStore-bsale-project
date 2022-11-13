import { $ } from "./global-object"

const responsiveNavFuncionality = () => {
  const burgerButton = $('#burger-button')
  const categoriesNav = $(`#${burgerButton.dataset['toggle']}`)

  if (window.matchMedia('(min-width: 768px)').matches) {
    categoriesNav.dataset.open = ''
  }

  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
    if (e.matches){
      categoriesNav.dataset.open = true
      categoriesNav.classList.remove('hidden')
    } else {
      categoriesNav.dataset.open = 'initial'
    } 
  })

  burgerButton.addEventListener('click', () => {
    if (burgerButton.dataset.mode === 'close')
      burgerButton.dataset.mode = 'open'
    else
      burgerButton.dataset.mode = 'close'

    if (burgerButton.dataset.mode === 'open')
      categoriesNav.dataset.open = true
    else
      categoriesNav.dataset.open = false

    $('body').classList.toggle('overflow-hidden')
  })
}

export default responsiveNavFuncionality
