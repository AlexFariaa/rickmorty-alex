require("dotenv").config();
const jwt = require("jsonwebtoken")
const {findByIdUserService} = require("../users/service/user.service")

const validLogin = (req, res, next) => {
    const authHeader = req.body
    
    if (!authHeader.jwt){
        return res.status(401).send({message: "Token não informado"})
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        const user = await findByIdUserService(decoded.id);
        
        if(err || !user || !user.id){
            return res.status(401).send({message: "Token inválido"})
        }
        req.userId = user.id

        return next();
    })
}

module.exports = {
    validLogin
}