import '@/css/style.css'
import { _xjs } from '@/lib/remi'
import { renderCategoriesNav, renderProducts } from './components'
import { searchFuncionality } from './utils'

/*-----------------------------------*/
/* Shared functionality between views
/*-----------------------------------*/
renderCategoriesNav()

searchFuncionality()

/*---------------------------------------*/
/* Main functionality of the current view
/*---------------------------------------*/
renderProducts()
