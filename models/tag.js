'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    Tag.hasMany(models.BlogTag, {foreignKey: 'id'})
  };
  return Tag;
};