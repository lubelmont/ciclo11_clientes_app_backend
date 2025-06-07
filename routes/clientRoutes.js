const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

router.get('/listAllclients', clientController.listAllclients);
router.get('/findClientById/:id', clientController.findClientById);
router.post('/createClient', clientController.createClient);

module.exports = router;