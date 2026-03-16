import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        //actions
        getNowPlayingMovies: (state, actions)=>{
            state.nowPlayingMovies = actions.payload
        }
    }
})
export const {getNowPlayingMovies} = movieSlice.actions
export default movieSlice.reducer