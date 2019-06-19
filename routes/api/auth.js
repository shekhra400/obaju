const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();
const User = require('../models/users');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/*
@route - POST api/user
@desc - Register User
*/
router.get('/', auth, async (req,res) => {
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
            res.status(400).json({error:[{ msg: "Invalid Credentials" }]});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(400).json({error:[{ msg: "Invalid password" }]});
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
            res.status(401).json({msg: "Token invalid"});
        }


})
module.exports = router;