const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();
const User = require('../models/users');
const config = require('config');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

/*
@route - GET api/user
@desc - Get User Details
*/
router.get('/', auth, async (req,res) => {
    console.log('1');
    try {
        const user = await User.findById(res.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error.message);
    }
});


/*
@route - POST api/user
@desc - Login User
*/
router.post('/login', async (req,res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
        if(!user){
            res.status(400).json({error:["Invalid Credentials"]});
        }

        const isMatch = verifyHash(password, user.password);
        console.log('passssss',isMatch)
        if(!isMatch){
            res.status(400).json({error:["Invalid password"]});
        }
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
            console.log(error.message);
            res.status(401).json({error: ["Token invalid"]});
        }


});
module.exports = router;

function verifyHash(password, original) {
    const originalHash = original.split('$')[1];
    const salt = original.split('$')[0];
    const hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
    
    return hash === originalHash
    
    }