'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    slug: DataTypes.STRING
  }, {});
  Blog.associate = function(models) {
    Blog.belongsTo(models.User, {
      foreignKey: 'id'
    })
  };
  return Blog;
};