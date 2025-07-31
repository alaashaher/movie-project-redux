import { useState } from "react"

import { addMovies } from "../movieSlice"
import { useDispatch } from "react-redux"
const MovieInput = () => {
    const [newMovie, setNewMovie] = useState("")
    const dispatch = useDispatch()
    const handelAddingMovie = () => {
        if (newMovie) {
            dispatch(addMovies(newMovie))
            setNewMovie("")
        }
    }
    return (
        <div>
            <input onChange={(e) => setNewMovie(e.target.value)} value={newMovie} />
            <button onClick={handelAddingMovie}>Add Movie</button>
        </div>
    )
}

export default MovieInput