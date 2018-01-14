//Include dependency
let Sequelize = require('sequelize');

//Setting up the config
const sequelize = new Sequelize("c9", "lmadalina", "", {
    dialect: 'mysql'
});

//Create the database


//Applying Cities Table to the database



module.exports = sequelize;