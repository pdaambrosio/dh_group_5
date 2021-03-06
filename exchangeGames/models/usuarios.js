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
      this.hasMany(models.Anuncio, {
        foreignKey: 'usuarios_id',
        as: 'anuncios'
      })
    } 
  }; 
  usuarios.init({ 
    id: { 
        type: DataTypes.BIGINT, 
        primaryKey: true, 
        autoIncrement: true, 
        unique: true 
    }, 
    nome:{ 
        type: DataTypes.STRING(150), 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "O campo Nome deve ser preenchido."
          },
        }      
    }, 
    sobrenome:{ 
        type: DataTypes.STRING(150), 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "O campo Sobrenome deve ser preenchido."
          },
        }      
    }, 
    email:{ 
        type: DataTypes.STRING(150), 
        allowNull: false,
        validate: {
          isEmail: {
            msg: "O campo Email deve conter um e-mail valido."
          }
        }         
    }, 
    nickname: { 
      type: DataTypes.STRING(150), 
      unique: true,
      validate: {
        notEmpty: {
          msg: "Você precisa criar um Nickname."
        },
      } 
    }, 
    senha:{ 
        type: DataTypes.STRING(150), 
        allowNull: false        
    },
    cidade: DataTypes.STRING(100),
    estado: DataTypes.STRING(100),
    facebook: DataTypes.STRING(100),
    instagram: DataTypes.STRING(100),
    twitter: DataTypes.STRING(100),  
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