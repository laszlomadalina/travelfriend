let express = require('express')
let router = express.Router();
let defaultController =require('../Controllers/default')

router.get('/', (req, res) => {
  res.status(200).send('<h1>here you are</h1>');
});

router.get('/create', defaultController.recreateTables);
router.use('/cities',require('./city'));
router.use('/routes',require('./route'));



router.get('*', function(req, res){
  res.status(404).send('what???');
});
module.exports = router;