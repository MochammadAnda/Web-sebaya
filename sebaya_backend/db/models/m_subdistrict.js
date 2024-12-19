"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class m_subdistrict extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      m_subdistrict.belongsTo(models.m_district, {
        foreignKey: "district_id",
        as: "district",
      });
      m_subdistrict.hasMany(models.m_pillar, {
        foreignKey: "subdistrict_id",
        as: "pillars",
      });
    }
  }
  m_subdistrict.init(
    {
      district_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      coordinate: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "m_subdistrict",
    }
  );
  return m_subdistrict;
};
