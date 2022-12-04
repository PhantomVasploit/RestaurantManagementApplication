const jwt = require('jsonwebtoken')


module.exports.requireAuth = (req, res, next)=>{
    try {
        const bearerHeader = req.headers['authorization']
        if(!bearerHeader){
            return res.status(401).json({message: 'Authentication header not set'})
        } else {
            const bearer = bearerHeader.split(' ')
            const token = bearer[1]
            if(!token){
                return res.status(401).json({message: 'Authentication token unavailable'})
            } else {
                return jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken)=>{
                    if(err){
                        return res.status(511).json({message: `User's not authenticated: ${err.message}`})
                    }
                    if(decodedToken){
                        req.phoneNumber = decodedToken.phoneNumber
                        return next()
                    }
                })
            }
        }
    } catch (error) {
        throw error
    }
}