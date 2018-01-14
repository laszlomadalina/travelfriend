const express = require('express');
const router = express.Router();
let routeController = require('../Controllers/route')

router.get('/', routeController.findAll);
router.post('/', routeController.create);

router.get('/:id', routeController.findById);
router.get('/:city', routeController.findByCity)
router.put('/:id', routeController.updateById);
router.delete('/:id', routeController.deleteById);




module.exports = router;