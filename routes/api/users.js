const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator/check');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const config = require('config');


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

        //Encrypt passward
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();


        //send Jsonwebtoken
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

module.exports = router;