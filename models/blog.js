'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    content: DataTypes.TEXT,
    name: DataTypes.STRING,
  }, {});
  Blog.associate = function(models) {
    Blog.belongsTo(models.User, {foreignKey: 'userId', onDelete: 'cascade', onUpdate: 'cascade'});
    Blog.hasMany(models.BlogTag, {foreignKey: 'blogId', onDelete: 'cascade', onUpdate: 'cascade'});
  };
  return Blog;
};

/*

Blog 1 * User

*/