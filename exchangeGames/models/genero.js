'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Anuncio_Genero, {
        foreignKey: 'generos_id', 
        targetKey: 'id'
      })
    }
  };
  Genero.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING(150)
    }, {
    sequelize,
    modelName: 'Genero',
    });
  return Genero;
};