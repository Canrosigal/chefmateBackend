"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe.belongsTo(models.cooksnap, {
        foreignKey: "id_cooksnap",
        as: "cooksnaps",
      });
      recipe.belongsTo(models.user, {
        foreignKey: "id_user",
        as: "users",
      });
      recipe.hasMany(models.jenis_makanan, {
        foreignKey: "id_jenis_makanan",
        as: "jenis_makanans",
      });
      recipe.hasMany(models.bahan, {
        foreignKey: "id_bahan",
        as: "bahans",
      });
      recipe.hasMany(models.langkah, {
        foreignKey: "id_langkah",
        as: "langkahs",
      });
      recipe.hasMany(models.komentar, {
        foreignKey: "id_komentar",
        as: "komentars",
      });
      recipe.hasMany(models.reaksi, {
        foreignKey: "id_reaksi",
        as: "reaksis",
      });
      recipe.hasMany(models.favorite, {
        foreignKey: "id_favorite",
        as: "favorites",
      })
    }
  }
  recipe.init(
    {
      judul: DataTypes.STRING,
      foto_recipe: DataTypes.STRING,
      porsi: DataTypes.INTEGER,
      durasi: DataTypes.INTEGER,
      id_recipe: DataTypes.INTEGER,
      id_favorite: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "recipe",
      underscored: true,
    }
  );
  return recipe;
};
