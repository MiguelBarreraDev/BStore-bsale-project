import { sequelize } from '#config/db.js'
import { DataTypes } from 'sequelize'

const ProductModel = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255)
  },
  url_image: {
    type: DataTypes.STRING(255)
  },
  price: {
    type: DataTypes.FLOAT
  },
  discount: {
    type: DataTypes.INTEGER(11),
  },
  category: {
    type: DataTypes.INTEGER(11)
  }
})

export default ProductModel
