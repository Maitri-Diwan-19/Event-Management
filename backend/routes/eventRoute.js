const express = require('express');
const { createEvent, registerToEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();


router.post('/', protect, createEvent);


router.post('/:id/register', protect, registerToEvent);

module.exports = router;
