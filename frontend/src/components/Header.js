import { renderElement, _xjs } from "@/lib/remi"
import { categoriesService } from "@/services"
import { $, ls, responsiveNavFuncionality } from "@/utils"

const Category = ({ name, id }) => {
  const paramsFromUrl = new URLSearchParams(window.location.search)
  const active = paramsFromUrl.get('id') == id

  return (
    _xjs('li', {
      children: _xjs('a', {
        class: `truncate capitalize transition md:hover:text-orange-300 ${active ? 'text-orange-400': 'text-slate-500'} font-serif md:font-sans text-3xl md:text-lg font-semibold`,
        href: `/pages/category/category.html?id=${id}&name=${name}`,
        children: name
      })
    })
  )
}

const CategoriesNav = async () => {
  let cachedData =  JSON.parse(ls.getItem('categories'))
  let categoriesList

  if (cachedData) {
    categoriesList = cachedData
  } else {
    const { data } = await categoriesService()
    categoriesList = data
    ls.setItem('categories', JSON.stringify(categoriesList))
  }

  responsiveNavFuncionality()

  return _xjs('fragment', {
    children: categoriesList.map(category => Category(category))
  })
}

export const renderCategoriesNav = () => {
  renderElement($('#categories-nav'),
    CategoriesNav,
    'async'
  )
}
