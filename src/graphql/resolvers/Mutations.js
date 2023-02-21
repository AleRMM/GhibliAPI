import Movie from "../../models/Movie.js";

const Mutation = {

    async createMovie(_, 
        {title, original_title, content, director, date_of_realease, duration,
        category, picture_url, trailer_url, likes}) {

            const newMovie = {title, original_title, content, director, 
                date_of_realease, duration, category, picture_url, trailer_url, likes}

            const movie = await Movie.create(newMovie);
            return movie
        }
}

export default Mutation