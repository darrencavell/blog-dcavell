'use strict';

const BlogTag = require('./../models/').BlogTag;

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
      BlogTag.create({
        blogId: 1,
        tagId: 1
      }),
      BlogTag.create({
        blogId: 1,
        tagId: 2
      }),
      BlogTag.create({
        blogId: 1,
        tagId: 3
      }),
      BlogTag.create({
        blogId: 2,
        tagId: 4
      }),
      BlogTag.create({
        blogId: 3,
        tagId: 5
      }),
      BlogTag.create({
        blogId: 4,
        tagId: 1
      }),
      BlogTag.create({
        blogId: 5,
        tagId: 2
      }),
      BlogTag.create({
        blogId: 6,
        tagId: 3
      }),
      BlogTag.create({
        blogId: 7,
        tagId: 5
      }),
      BlogTag.create({
        blogId: 8,
        tagId: 3
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
    return queryInterface.bulkDelete('BlogTags', null, {});
  }
};
