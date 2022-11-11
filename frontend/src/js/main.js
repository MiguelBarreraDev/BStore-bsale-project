import axios from 'axios'
import '../css/style.css'
import { _xjs, renderElement } from '../lib/remi'

const API_URI = 'http://localhost:3000'
axios.defaults.baseURL = API_URI
// Data
const productsService = () => axios.get('products')

// Component
const ProductCard = ({ url_image, name }) => (
  _xjs('div', {
    class: 'shadow-xl rounded-md shadow-slate-250 w-60 h-80 overflow-hidden',
    children: [
      _xjs('img', {
        class: 'object-cover h-3/4',
        height: '500',
        src: url_image,
        alt: 'product image licores'
      }),
      _xjs('div', {
        class: 'p-2',
        children: _xjs('h4', {
          class: 'text-md text-slate-600 font-semibold',
          children: name
        })
      }),
    ]
  })
)

const states = {
  prev: undefined,
  curr: undefined,
  active: false,
  render: null
}

const useState = (defaultValue) => {
  console.log('haber')
  states.curr = states.curr === undefined ? defaultValue : states.curr
  states.prev = states.prev === undefined ? defaultValue : states.curr
  const setState = (cb) => {
    if (typeof cb !== 'function'){
      if (cb === states.curr) return
      states.prev = cb
      states.curr = cb
      states.render()
    } else {
      newValue = cb(states.curr)
      if (newValue === states.curr) return
      states.prev = cb
      states.curr = newValue
      states.render()
    }
  }
  return [states.curr, setState]
}

// Component
const ProductsSection = () => {
  const [productsList, setProductsList] = useState([])
  
  if (!states.active) {
    console.log('holaa')
    const loadData = async () => {
      const { data } = await productsService()
      setProductsList(data)
      // console.log(productsList)
      // console.log(ProductsSection)
      return data
    }
    loadData()
  }
  
  console.log(productsList)
  return productsList.length === 0 ? _xjs('div', { children: 'loading'}) : _xjs('fragment', {
    children: productsList.map(product => ProductCard(product))
  })
}
// Render
const toRender = () => renderElement(document.getElementById('products-section'),
  ProductsSection()
)
states.render = toRender
toRender()

states.active = true
