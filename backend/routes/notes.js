const express = require('express');
const router = express.Router();
const Note = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');



//Router 1 end point fetchallnotes to get all the notes stored in database
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        console.log(req.body);
        const notes = await Note.find({ user: req.user.id });
        // notes.save();
        res.json(notes);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// Router 2 end point to post the note to the database 

router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description is too short').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save()

        res.json(saveNote)

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

})

// Router 2 update a existing note Login required 

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const newNote = {};
        if (title) {
            newNote.title = title
        };
        if (description) {
            newNote.description = description
        };
        if (tag) {
            newNote.tag = tag
        };

        //  Find the note to be update and update it 
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }
        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Not allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})



// Route 4: delete an existing note usin delete  Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    // Find the note to be deleted and delete it 
    try {
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("not found") }

        // Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id);
        res.json({ "Success": "Note has been deleted", note: note });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})



module.exports = router;