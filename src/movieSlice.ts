import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [{
        id: 1,
        name: "Harry Potter",
    }],
}
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state: any, action: { payload: Object }) => {
            const movieObj = { id: state.movies.length > 0 ?state.movies[state.movies.length - 1] + 1 : 1, name: action.payload }
            state.movies.push(movieObj)
        },


        removeMovies: (state: any, action: { payload: Object }) => {
            state.movies = state.movies.filter((movie: any) => movie.id != action.payload)
        },
    },
})
export const { addMovies, removeMovies } = movieSlice.actions
export default movieSlice.reducer;