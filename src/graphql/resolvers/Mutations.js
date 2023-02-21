import User from "../../models/User.js";
import createToken from "./Auth.js"

const Mutation = {

//REGISTER USER
    async register(_, {username, email, password}) {

        const newUser = {username, email, password};
        const user = await User.create(newUser);
        //JWT
        const token = createToken(user)
        return token
    },

    async login(_, {email, password}) {

        const args = {email, password};

        const user = await User.findOne({email: args.email}).select('+password')

        if(!user || args.password !== user.password) 
            throw new Error("Invalid credentials")

        const token = createToken(user)

        return token
    }
}

export default Mutation