'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usuarios.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING(150),
        allowNull: false       
    },
    sobrenome:{
        type: DataTypes.STRING(150),
        allowNull: false       
    },
    email:{
        type: DataTypes.STRING(150),
        allowNull: false       
    },
    nickname: DataTypes.STRING(150),
    senha:{
        type: DataTypes.STRING(45),
        allowNull: false       
    },
    notificacao_site: DataTypes.TINYINT(1),
    notificacao_parceiros: DataTypes.TINYINT(1),
    usuario_bloqueado: DataTypes.TINYINT(1),
    role: DataTypes.ENUM('USER','ADMIN'),
    lista_favoritos_id: DataTypes.BIGINT,
    avatar: DataTypes.STRING(250)
  }, {
    sequelize,
    modelName: 'usuarios',
    timestamps: false
  });
  return usuarios;
};