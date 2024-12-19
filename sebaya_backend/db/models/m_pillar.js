"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class m_pillar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      m_pillar.belongsTo(models.m_subdistrict, {
        foreignKey: "subdistrict_id",
        as: "subdistrict",
      });
    }
  }
  m_pillar.init(
    {
      subdistrict_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      coordinate: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "m_pillar",
    }
  );
  return m_pillar;
};
