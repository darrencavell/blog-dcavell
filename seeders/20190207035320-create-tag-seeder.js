'use strict';

const Tag = require('./../models').Tag;

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return Promise.all([
      Tag.create({
        name: 'Technology'
      }),
      Tag.create({
        name: 'Coding'
      }),
      Tag.create({
        name: 'Frontend'
      }),
      Tag.create({
        name: 'Backend'
      }),
      Tag.create({
        name: 'Javascript'
      }),
      Tag.create({
        name: 'Career'
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Tags', null, {});
  }
};
