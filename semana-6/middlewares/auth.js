import jsonWebToken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.SECRET_KEY

const validacionToken = (req, res, next) => {
    console.log("Middleware de autenticación");
    const jwt = req.headers.authorization;
    if (!jwt) {
        return res.status(401).json({ message: "No se ha proporcionado un token" });
    }

    const token = jwt.split(" ")[1];
    console.log("Token: ", token);
    
    jsonWebToken.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Token inválido" });
        }
        req.body.userId = decoded.id;
    }
    );

    next();
}

export { validacionToken }
