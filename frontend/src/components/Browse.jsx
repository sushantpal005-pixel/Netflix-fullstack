import React from 'react'
import Header from './Header'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import MainContainer from './MainContainer'
import MovieContainer from './MovieContainer'
import axios from 'axios'
import { now_Playing_Movies, options } from '../utils/constant'
import { getNowPlayingMovies } from '../redux/movieSlice'
const Browse = () => {
  const user = useSelector(store => store.app.user)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const nowPlayingMovies = async()=>{
    try {
      const res = await axios.get(now_Playing_Movies, options)
      
      dispatch(getNowPlayingMovies(res.data.results))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
    nowPlayingMovies()
  }, [])
  return (
    <div>
      <Header />
      <div>
        <MainContainer/>
        <MovieContainer/>
      </div>
    </div>
  )
}

export default Browse
