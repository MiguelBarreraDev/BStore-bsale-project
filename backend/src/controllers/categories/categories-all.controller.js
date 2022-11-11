import CategoryModel from "#models/category.models.js"

const categoriesAllController = async (req, res) => {
  const products = await CategoryModel.findAll()
  return res.json(products ?? [])
}

export default categoriesAllController
