const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'adityaisagoodb$oy';
// Create a user using: POST "/api/auth/createuser". Doesn't require auth
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should be 8 characters long').isLength({ min: 8 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Check whether user exists with a unique email
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Email already exists. Please use a different email." });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Attempt to create the user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        // If user creation is successful, send the user as JSON
        res.json({ authToken });
    } catch (err) {
        console.error("Error creating user:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
        // }
    }
});

module.exports = router;
