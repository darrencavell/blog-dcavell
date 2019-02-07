'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlogTag = sequelize.define('BlogTag', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    blogId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  BlogTag.associate = function(models) {
    BlogTag.belongsTo(models.Blog, {foreignKey: 'blogId'}),
    BlogTag.belongsTo(models.Tag, {foreignKey: 'tagId'})
  };
  return BlogTag;
};

/*

Blog * 1 BlogTag 1 * Tag

*/