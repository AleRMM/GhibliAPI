import Movie from "../../models/Movie.js";
import User from "../../models/User.js";
import createToken from "./Auth.js"

const Mutation = {

/// REGISTER USER & LOGIN  ///
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
    },

/// MOVIE RESOLVERS  ///

//CREATE
    async createMovie(_, 
        {title, original_title, content, director, date_of_realease, duration,
        category, picture_url, trailer_url, likes}) {

        const newMovie = {title, original_title, content, director, 
            date_of_realease, duration, category, picture_url, trailer_url, likes};

        const movie = await Movie.create(newMovie);
        return movie
    },

//UPDATE
    async updateMovie(_, 
        {_id, title, original_title, content, director, date_of_realease, duration,
        category, picture_url, trailer_url, likes}) {

        const movie = {title, original_title, content, director, 
        date_of_realease, duration, category, picture_url, trailer_url, likes};
        return await Movie.findByIdAndUpdate(_id, movie, {new: true})
},

//DELETE
    async deleteMovie(_, {_id}) {
    await Movie.findByIdAndDelete(_id)
    return await Movie.find()
    }

}

export default Mutation