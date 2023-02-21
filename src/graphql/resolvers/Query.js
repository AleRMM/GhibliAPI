import Movie from "../../models/Movie.js";

const Query = {

    getMovies(){
        const movies = Movie.find();
        return movies
    }
}

export default Query