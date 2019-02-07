'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {});
  Blog.associate = function(models) {
    Blog.belongsTo(models.User, {foreignKey: 'userId'});
    Blog.hasMany(models.BlogTag, {foreignKey: 'id'});
  };
  return Blog;
};

/*

Blog 1 * User

*/