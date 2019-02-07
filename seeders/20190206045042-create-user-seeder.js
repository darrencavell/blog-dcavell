'use strict';

const User = require('./../models').User;

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      
      return Promise.all([
        User.create({
          name: 'Darren Cavell',
          email: 'darren@mail.com',
          password: 'darren',
          createdAt: new Date(),
          updatedAt: new Date()
        }),
        User.create({
          name: 'Kevin Tigravictor',
          email: 'kevin@mail.com',
          password: 'kevin',
          createdAt: new Date(),
          updatedAt: new Date()
        }),
        User.create({
          name: 'Edward Kurniadi',
          email: 'edward@mail.com',
          password: 'edward',
          createdAt: new Date(),
          updatedAt: new Date()
        })
      ]);
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('Users', null, {});

  }
};
