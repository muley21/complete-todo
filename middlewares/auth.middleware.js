const jwt = require('jsonwebtoken')

exports.userProtected = async (req, res, next) => {
    const token = req.cookies.auth
    if (!token) {
        return res.status(401).json({ message: "No Cookie Found" })
    }
    jwt.verify(token, process.env.JWT_KEY, (error, decode) => {
        if (error) {
            return res.status(401).json({ message: "Invalid Token" })

        }

        req.user = decode._id
        next()
    })
}