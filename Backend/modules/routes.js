'use strict';

module.exports = function (sequelize, DataTypes) {
 return sequelize.define('route', {
    title : DataTypes.STRING,
    content : DataTypes.TEXT
  })
}