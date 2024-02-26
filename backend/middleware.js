const {JWT_SECRET} = require('./config.js');
const jwt = require('jsonwebtoken');


 const authMiddleware = (req,res,next)=>{
    // const authHeader = req.headers.authorization;

    // if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //     return res.status(403).json({});
    // }
    // const token = authHeader.split(' ')[1];

    const token = req.cookies.access_token
    if(!token) {
        return res.status(403).json({});
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
    
}

module.exports = {
    authMiddleware
}