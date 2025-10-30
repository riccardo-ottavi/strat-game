const express = require("express");

// settiamo il router
const router = express.Router();

// importiamo il controller della risorsa
const gameDataController = require('../controllers/gameDataController');

// Rotte di CRUD sulla risorsa 
// index
router.get('/', gameDataController.index);

// show
router.get('/:id', gameDataController.show);


module.exports = router;