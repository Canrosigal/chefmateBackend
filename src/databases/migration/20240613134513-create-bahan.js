'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bahans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_bahan: {
        type: Sequelize.TEXT
      },
      id_recipe: {
        type: Sequelize.INTEGER,
        references: {
          model:"recipes",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bahans');
  }
};