import '@/css/style.css'
import { _xjs, renderElement } from '@/lib/remi'
import { renderCategoriesNav, renderProducts } from '@/components'
import { $, searchFuncionality } from '@/utils'
import axios from 'axios'

/*----------------------*/
/* Built in
/*----------------------*/
renderCategoriesNav()

searchFuncionality()

/*----------------------*/
/* Custom
/*----------------------*/
const paramsFromUrl = new URLSearchParams(window.location.search)
if (!paramsFromUrl.get('id')) {
  renderElement($('#category-name'),
    () => 'Category No Registrada',
    'sync'
  )
}
else {
  renderElement($('#category-name'),
    async () => {
      const { data } = await axios.get(`categories/${paramsFromUrl.get('id')}`)
      return data.name
    },
    'async'
  )

  renderProducts({ categoryId: paramsFromUrl.get('id') })
}
