'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anuncio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Anuncio.init({
    id: {
        type: DataTypes.INTERGER,
        primaryKey: true,
        autoIncrement: true
    },
    ano: DataTypes.NUMBER,
    descricao: DataTypes.STRING(1500),
    nome: DataTypes.STRING(150),
    tempo_uso: DataTypes.STRING(45),
    condicao: DataTypes.ENUM('NOVO', 'USADO', 'LACRADO'),
    chat_id: DataTypes.INTERGER,
    usuarios_id: {
        type: DataTypes.INTERGER,
        references:{
            model:'usuarios'
        }
    },
    plataformas_id: {
            type: DataTypes.INTERGER,
            references:{
                model:'plataformas'
            }
    }
  }, {
    sequelize,
    modelName: 'Anuncio',
  });
  return Anuncio;
};