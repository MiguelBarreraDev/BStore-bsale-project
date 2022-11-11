import ProductModel from "#models/product.models.js"

const productController = async (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).json({ errors: [`Product ID is missing`] })

  const product = await ProductModel.findOne({ where: { id } })
  if (!product) return res.status(404).json({ errors: [`Product not found`] })

  return res.json(product)
}

export default productController
