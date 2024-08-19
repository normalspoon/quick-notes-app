
const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');



// GET /api/users/check-token
router.get('/', notesCtrl.index);
// POST /api/notes
router.post('/', notesCtrl.create);


module.exports = router;
