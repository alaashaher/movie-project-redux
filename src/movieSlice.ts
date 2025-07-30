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
            state.movies.push(action.payload)
        },

        removeMovies: (state: any) => {
            state.movies = []
        },
    },
})
export const { addMovies, removeMovies } = movieSlice.actions
export default movieSlice.reducer;