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
    Blog.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade'});
    Blog.hasMany(models.BlogTag, {foreignKey: 'id', sourceKey: 'id', onDelete: 'cascade', onUpdate: 'cascade'});
  };
  return Blog;
};

/*

Blog 1 * User

*/