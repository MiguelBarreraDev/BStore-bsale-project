import { sequelize } from "#config/db.js"
import { QueryTypes } from "sequelize"

const productsSearchController = async (req, res) => {
  const { product } = req.query
  const filter = `%${product}%`
  const productsList = await sequelize.query(`
    SELECT * FROM product
    WHERE name LIKE $name OR discount LIKE $discount OR price LIKE $price;
  `, {
    bind: { name: filter, discount: filter, price: filter },
    type: QueryTypes.SELECT
  })

  return res.json(productsList)
}

export default productsSearchController
