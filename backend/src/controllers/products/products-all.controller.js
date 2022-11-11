import ProductModel from "#models/product.models.js"

const productsAllController = async (req, res) => {
  const products = await ProductModel.findAll()
  return res.json(products ?? [])
}

export default productsAllController
