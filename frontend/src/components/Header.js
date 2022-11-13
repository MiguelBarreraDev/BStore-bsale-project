import { renderElement, _xjs } from "@/lib/remi"
import { categoriesService } from "@/services"
import { $, responsiveNavFuncionality } from "@/utils"

const Category = ({ name, id }) => (
  _xjs('li', {
    children: _xjs('a', {
      class: 'truncate capitalize transition md:hover:text-orange-400 text-slate-500 font-serif md:font-sans text-3xl md:text-lg font-semibold',
      href: `/pages/category/category.html?id=${id}&name=${name}`,
      children: name
    })
  })
)

const CategoriesNav = async () => {
  const { data: categoriesList } = await categoriesService()

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
