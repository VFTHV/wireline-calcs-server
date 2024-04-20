const express = require('express');
const router = express.Router();

const { submitProblem } = require('../controllers/formController');

router.post('/', submitProblem);

module.exports = router;
