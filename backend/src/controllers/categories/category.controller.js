import CategoryModel from "#models/category.models.js"

const categoryController = async (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).json({ errors: ['Category ID is missing'] })

  const categoryById = await CategoryModel.findOne({ where: { id } })
  if (!categoryById) return res.status(404).json({ errors: ['Category not found'] })

  return res.json(categoryById)
}

export default categoryController
