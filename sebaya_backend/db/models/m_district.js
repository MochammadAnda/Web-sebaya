"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class m_district extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      m_district.hasMany(models.m_subdistrict, {
        foreignKey: "district_id",
        as: "subdistricts",
      });
    }
  }
  m_district.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      coordinate: DataTypes.TEXT,
      imageUrl: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "m_district",
    }
  );
  return m_district;
};
