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
      this.belongsTo(models.Anuncio, {
        foreignKey: 'anuncios_id', 
        targetKey: 'id'
      })
    }
  };
  Imagem.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    anuncios_id: {
      type: DataTypes.BIGINT,
      references:{
          model:'anuncios'
      }
  },
    foto_principal: DataTypes.TINYINT(1),
    caminho: DataTypes.STRING(250)
  }, {
    sequelize,
    modelName: 'Imagem',
  });
  return Imagem;
}; 