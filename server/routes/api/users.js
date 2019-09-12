const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const config = require('config');
const crypto = require('crypto');

/*
@route - POST api/user
@desc - Register User
*/

router.post('/', [
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email','Invalid email format').isEmail()
], async (req,res) => {
    const errors  = validationResult(req);

    //throws error for invalid form fields
    if(!errors.isEmpty()){
        res.status(400).json({errors : errors.array()})
    }
    const { name, email, password} = req.body;
    try {

        // See if user exists
        let user = await User.findOne({email});
        if(user) {
            res.status(400).json({errors:[{msg: 'User already exists'}]});
        }

        user = new User({
            name,
            email,
            password
        });

        //Encrypt password
        user.password = hashPassword(password);
        await user.save();

        //send Jsonwebtoken to the user as success response
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn:3600},
            (err,token) => {
                if(err)throw err;
                    res.json({token})
                });
                
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
});

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
    return [salt, hash].join('$');
    }

module.exports = router;