'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class komentar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      komentar.hasMany (models.recipe, {
        foreignKey: "id_recipe",
        as: "recipes"
      })
    }
  }
  komentar.init({
    deskripsi: DataTypes.TEXT,
    id_user: DataTypes.INTEGER,
    id_recipe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'komentar',
    underscored: true,
  });
  return komentar;
};