let Route = require('../models').Route;

module.exports.findAll = (req, res) => {
  Route.findAll()
      .then((results) => {
        res.status(200).json(results)
      })
      .catch(() => res.status(500).send('ERROR! The routes could not be found'))
}


module.exports.create =(req, res) => {
  Route.create(req.body)
      .then(() => {
        res.status(201).send('created')
      })
      .catch(() => res.status(500).send('ERROR! The route could not be created!'))
}


module.exports.findById = (req, res) => {
  Route.findById(req.params.id)
      .then((result) => {
        if (result){
          res.status(200).json(result)
        }
        else{
          res.status(404).send('not found')
        }
      })
      .catch(() => res.status(500).send('ERROR! The route could not be found!'))
}

module.exports.findByCity = (req, res) => {
  Route.findByCity(req.params.id)
      .then((result) => {
        if (result){
          res.status(200).json(result)
        }
        else{
          res.status(404).send('not found')
        }
      })
      .catch(() => res.status(500).send('ERROR! The route could not be found!'))
}

module.exports.updateById =  (req, res) => {
  Route.findById(req.params.id)
      .then((result) => {
        if (result){
          return result.update(req.body)
        }
        else{
          res.status(404).send('ERROR! The route could not be found!')
        }
      })
      .then(() => {
        res.status(201).send('modified')
      })
      .catch(() => res.status(500).send('ERROR! The route could not be updated'))
}

module.exports.deleteById = (req, res) => {
  Route.findById(req.params.id)
      .then((result) => {
        if (result){
          return result.destroy()
        }
        else{
          res.status(404).send('ERROR! The route could not be found!')
        }
      })
      .then(() => {
        res.status(201).send('removed')
      })
      .catch(() => res.status(500).send('ERROR! The route could not be deleted!'))
}