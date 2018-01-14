let model = require('../models')

module.exports.recreateTables = (req, res) => {
  model.sequelize.sync({force: true})
      .then(() => res.status(201).send('recreated all tables'))
      .catch(() => res.status(500).send('the tables could not be recreated'))
}