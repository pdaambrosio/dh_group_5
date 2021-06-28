'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Anuncios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.NUMBER
      },
      ano: {
        type: Sequelize.NUMBER
      },
      descricao: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      tempo_uso: {
        type: Sequelize.STRING
      },
      condicao: {
        type: Sequelize.STRING
      },
      chat_id: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Anuncios');
  }
};