"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class m_gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  m_gallery.init(
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.TEXT,
      coordinate: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "m_gallery",
    }
  );
  return m_gallery;
};
