import axios from 'axios'
import '../css/style.css'
import { _xjs, renderElement } from '../lib/remi'

// Config
const API_URI = 'http://localhost:3000'
axios.defaults.baseURL = API_URI

// Utils
const $ = slc => document.querySelector(slc)


// services
const productsService = () => axios.get('products')
const categoriesService = () => axios.get('categories')
const searchProductsService = (product) => axios.get('products/search', { params: { product } })



/*--------------------------------*/
/* Category Component
/*--------------------------------*/
const Category = ({ name }) => (
  _xjs('li', {
    children: _xjs('a', {
      class: 'truncate capitalize transition hover:text-orange-500 text-slate-500 font-serif md:font-sans text-3xl md:text-lg font-semibold',
      href: '/tienda',
      children: name
    })
  })
)

const CategoriesNav = async () => {
  const { data: categoriesList } = await categoriesService()
  return _xjs('fragment', {
    children: categoriesList.map(category => Category(category))
  })
}

renderElement($('#categories-nav'),
  CategoriesNav,
  'async'
)
/*--------------------------------*/
/* Product Card Component
/*--------------------------------*/
const ProductCard = ({ url_image, name, id, price, discount }) => (
  _xjs('div', {
    class: `relative flex flex-col justify-between shadow-xl rounded-md shadow-slate-250 w-8/12 sm:max-w-xs h-96 overflow-hidden
    `,
    children: [
      _xjs('div', {
        class: `${!discount && 'hidden'} -translate-x-1/2 -translate-y-3/4 -rotate-45 origin-top-right text-md absolute text-center w-4/12 bg-orange-500 text-white`,
        children: `-${discount}%`
      }),
      _xjs('img', {
        class: 'flex-1 object-cover w-full h-3/5',
        height: '200',
        src: url_image,
        alt: 'product image licores'
      }),
      _xjs('div', {
        class: 'p-2 text-center',
        children: [
          _xjs('span', {
            class: 'text-orange-500 text-sm',
            children: 'BStore company'
          }),
          _xjs('h4', {
            class: 'truncate text-md text-slate-600 font-semibold',
            children: name
          }),
          _xjs('span', {
            class: 'block text-slate-500 text-xl',
            children: `S/. ${price}`
          }),
          _xjs('button', {
            class: 'flex w-fitt gap-2 px-2 mx-auto items-center justify-evenly my-2 py-1 hover:bg-orange-500 transition hover:text-white text-center text-slate-500 border-orange-500 border',
            children: [
              _xjs('i', {
                class: 'fa-solid fa-cart-shopping'
              }),
              'Añadir al carro'
            ]
          })
        ]
      }),
    ]
  })
)
// Component
const ProductsSection = async (data) => {
  const { data: productsList } = data ?? await productsService()

  return _xjs('fragment', {
    children: productsList.map(product => ProductCard(product))
  })
}

// Render
renderElement($('#products-section'),
  ProductsSection,
  'async'
)

/*--------------------------------*/
/* Feat - search
/*--------------------------------*/
const searchProductButton = $('#search-product-button')
const searchProductInput = $('#search-product-input')

const getFilteredProducts = async () => {
  const searchProductInput = $('#search-product-input')
  const filteredProduct = await searchProductsService(searchProductInput.value)
  renderElement($('#products-section'),
    () => ProductsSection(filteredProduct),
    'async'
  )
  ProductsSection(filteredProduct)
}


searchProductInput.addEventListener('keyup', e => {
  if (e.keyCode === 13 || e.key === 'Enter') {
    getFilteredProducts()
    searchProductInput.value = ''
  }
})

searchProductButton.addEventListener('click', async () => {
  getFilteredProducts()
  searchProductInput.value = ''
})

/*--------------------------------*/
/* Feat - Menu animation
/*--------------------------------*/
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

burgerButton.addEventListener('click', (e) => {
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


