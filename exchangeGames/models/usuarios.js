'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
    }
  };
  Usuarios.init({
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
    avatar: DataTypes.STRING(45)
    }, {
        sequelize,
        modelName: 'Usuarios',
    });
    return Usuarios;
};