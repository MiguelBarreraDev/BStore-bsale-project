import { sequelize } from '#config/db.js'
import { DataTypes } from 'sequelize'

const CategoryModel = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER(11),
    autoIncrement:true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255)
  }
})

export default CategoryModel
