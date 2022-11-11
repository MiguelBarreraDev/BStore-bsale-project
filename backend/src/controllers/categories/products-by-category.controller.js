import ProductModel from "#models/product.models.js"

const productsByCategoryController = async (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).json({ errors: ['Category ID is missing'] })

  const productsByCategory = await ProductModel.findAll({ where: { category: id } })

  return res.json(productsByCategory ?? [])
}

export default productsByCategoryController
