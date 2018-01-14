const express = require('express');
const router = express.Router();
let cityController = require('../Controllers/city')



router.get('/',cityController.findAll);
router.post('/', cityController.create);

router.get('/:id', cityController.findById);
router.put('/:id', cityController.updateById);
router.delete('/:id', cityController.deleteById);


module.exports = router;