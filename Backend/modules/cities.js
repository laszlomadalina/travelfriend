'use strict';

module.exports = function (sequelize, DataTypes) {
 return sequelize.define('city', {
    title : DataTypes.STRING,
    content : DataTypes.TEXT
  })
}