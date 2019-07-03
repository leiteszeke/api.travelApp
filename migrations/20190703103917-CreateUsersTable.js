'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      lastname: Sequelize.STRING,
      email: Sequelize.STRING,
      fbuid: Sequelize.INTEGER,
      phone: Sequelize.INTEGER,
      password: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('users');
  }
};
