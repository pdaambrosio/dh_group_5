'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Imagem.init({
    id: DataTypes.NUMBER,
    anuncios_id: DataTypes.NUMBER,
    foto_principal: DataTypes.NUMBER,
    caminho: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Imagem',
  });
  return Imagem;
};