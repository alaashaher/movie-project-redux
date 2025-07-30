import { useSelector } from "react-redux"
const MovieList = () => {
    const movies = useSelector((state: any) => state.movieState.movies)
    return (
        <div>
            <h1>
                Movie List
            </h1>
            {movies && movies.map((movie: any) => <div key={movie.id}>{movie.name}</div>)}
        </div>
    )
}

export default MovieList