const jwt = require('jsonwebtoken');
const config = require('config');

// Middleware function is to verify the user token and authorize
/*
It takes user x-auth-token from the request and validate it against user.
*/
module.exports = (req, res, next) => {

    const token = req.header('x-auth-token');

    if(!token){
        res.status(401).json({msg: "No token, autherization required"});
    }
    try {
        const decoded = jwt.verify(token,config.get('jwtSecret'));
        console.log(decoded);
        res.user = decoded.user;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(401).json({msg: "Token invalid"});
    }
}
