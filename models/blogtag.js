'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlogTag = sequelize.define('BlogTag', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {});
  BlogTag.associate = function(models) {
    BlogTag.belongsTo(models.Blog, {foreignKey: 'blogId', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade'});
    BlogTag.belongsTo(models.Tag, {foreignKey: 'tagId', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade'});
  };
  return BlogTag;
};

/*

Blog * 1 BlogTag 1 * Tag

*/