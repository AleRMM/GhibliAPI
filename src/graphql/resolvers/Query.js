import Movie from "../../models/Movie.js";

const Query = {

//READ
    getMovies(){
        const movies = Movie.find();
        return movies
    },

    async getMovieByTitle( _, {title}) {
        const oneMovie = await Movie.findOne({title: title});
        return oneMovie;
    },

//LOGIN
async login(_, {email,password} ){
    let message;
    const verifyUser = await User.find( { email: email, password : password});
    console.log('user', verifyUser.length)

    if(verifyUser.length > 0){ 
        message = "Your Welcome User"
    } else{
        message = "Sorry, verify your email or password"
    }
    return message;
},
}

export default Query