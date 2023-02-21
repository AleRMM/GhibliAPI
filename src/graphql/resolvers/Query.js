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
}

export default Query