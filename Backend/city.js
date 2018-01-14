let City = require('../models').City;

module.exports.findAll = (req, res) => {
  City.findAll()
      .then((results) => {
        res.status(200).json(results)
      })
      .catch(() => res.status(500).send('ERROR! Could not find all articles'))
}


module.exports.create =(req, res) => {
  City.create(req.body)
      .then(() => {
        res.status(201).send('created')
      })
      .catch(() => res.status(500).send('ERROR! The city could not be created!'))
}


module.exports.findById = (req, res) => {
  City.findById(req.params.id)
      .then((result) => {
        if (result){
          res.status(200).json(result)
        }
        else{
          res.status(404).send('not found')
        }
      })
      .catch(() => res.status(500).send('ERROR! The city could not be found!'))
}

module.exports.updateById =  (req, res) => {
  City.findById(req.params.id)
      .then((result) => {
        if (result){
          return result.update(req.body)
        }
        else{
          res.status(404).send('ERROR! The city could not be found!')
        }
      })
      .then(() => {
        res.status(201).send('modified')
      })
      .catch(() => res.status(500).send('ERROR! The city could not be updated'))
}

module.exports.deleteById = (req, res) => {
  City.findById(req.params.id)
      .then((result) => {
        if (result){
          return result.destroy()
        }
        else{
          res.status(404).send('ERROR! The city could not be found!')
        }
      })
      .then(() => {
        res.status(201).send('removed')
      })
      .catch(() => res.status(500).send('ERROR! The city could not be deleted!'))
}