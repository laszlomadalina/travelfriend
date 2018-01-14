'use strict';
let sequelize = require('../Configurations/db');

let City = sequelize.import('./city');
let Route = sequelize.import('./route');


City.hasMany(Route);

 sequelize.sync({force: true})
      

module.exports ={
  City,
  Route,
  sequelize
};