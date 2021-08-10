'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnuncioFavorito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AnuncioFavorito.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
  },
    lista_anuncio_id: DataTypes.BIGINT,
    anuncios_id: DataTypes.BIGINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    usuarios_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'AnuncioFavorito',
  });
  return AnuncioFavorito;
};