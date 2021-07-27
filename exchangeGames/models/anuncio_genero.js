'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anuncio_Genero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Anuncio, {
      foreignKey: 'anuncios_id',
      targetKey: 'id'
      })
    }
  };
  Anuncio_Genero.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
  },
    anuncios_id: {
    type: DataTypes.BIGINT,
    references: {
      model:'anuncios'
    }
    },
    generos_id: {
      type: DataTypes.BIGINT,
      references: {
        model:'generos'
      }
    }
    },
    {
    sequelize,
    modelName: 'Anuncio_Genero',
    tableName: 'anuncios_generos'
    });
    return Anuncio_Genero;
};