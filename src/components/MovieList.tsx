import { useDispatch, useSelector } from "react-redux"
import { removeMovies } from "../movieSlice"

const MovieList = () => {
    const movies = useSelector((state: any) => state.movieState.movies)

    const dispatch = useDispatch()
    const handelDeletingMovie = (id: any) => {

        dispatch(removeMovies(id))

    }

    return (
        <div>
            <h1>
                Movie List
            </h1>
            {movies && movies.map((movie: any) => <div key={movie.id}>{movie.name}
                <button onClick={() => handelDeletingMovie(movie.id)}>Delete</button>
            </div>)}
        </div>
    )
}

export default MovieList