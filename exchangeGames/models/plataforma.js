'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plataforma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Plataforma.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
  },
    console: DataTypes.STRING(150),
    marca: DataTypes.STRING(150)
  }, {
    sequelize,
    modelName: 'Plataforma',
  });
  return Plataforma;
};