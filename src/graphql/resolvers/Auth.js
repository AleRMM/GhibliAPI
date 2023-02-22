import jwt from "jsonwebtoken";

const createToken = user => {
    return jwt.sign({user}, 'secret', {
        expiresIn: '1h'
    })
}

export default createToken