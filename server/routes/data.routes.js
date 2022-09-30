const Router = require('express');
const router = new Router();
const dataController = require('../controller/data.controller');

router.post('/data', dataController.createData);
router.get('/data', dataController.getData);
router.delete('/data/:id', dataController.deleteData);
 
module.exports = router;