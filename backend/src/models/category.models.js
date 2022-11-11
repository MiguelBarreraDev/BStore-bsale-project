import { sequelize } from '#config/db.js'
import { DataTypes } from 'sequelize'

const CategoryModel = sequelize.define('category', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'category',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ]
})

export default CategoryModel
