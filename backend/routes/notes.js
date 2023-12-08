const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes')

router.post('/', (req, res) => {
    console.log(req.body);
    const notes = new Notes(req.body);
    notes.save();
    res.json(req.body);

})

module.exports = router;