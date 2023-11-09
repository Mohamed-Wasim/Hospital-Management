const express = require('express');
const registerUsr = require('../controllers/userCtrl');
const router = express.Router();

// --- Creating a user --- !
router.post('/create/user',registerUsr);

module.exports = router;
